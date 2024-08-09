'use server'

import { ExamPageFormSchemaType, QuestionType } from "@/types/schemas";
import { Results } from "@/types/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
// type Answer = { questionId: string; answer: string }[];

export interface ActionResponse {
  status: 'error' | 'success';
  message: string;
}

export async function getResults({answers, quizId}: {answers: ExamPageFormSchemaType, quizId: number,  subId? : number}) : Promise<ActionResponse>{
 const getExamScore = ({
  questions,
  answers,
  hidden_answers,
  neg_marking = 0
}: {
  questions: QuestionType[];
  answers: ExamPageFormSchemaType;
  hidden_answers : boolean
  neg_marking?: number | null

}) : {score : number; results : Results[] ; grade : string; passed : boolean} => {
  let score = 0;
  let results : Results[] = [];
  let samplingScore = 0;
  let mcqScore = 0;
  let trueFalseScore = 0;
  let fillInTheBlankScore = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const answer = answers[question.id];
    if (question.answer.toLowerCase() === answer?.answer.toLowerCase()) {
      score++;
      if (question.type === 'mcq') mcqScore++;
      if (question.type === 'truefalse') trueFalseScore++;
      if (question.type === 'fill') fillInTheBlankScore++;
      if (question.type === 'sampling') samplingScore++;
    } else  score =  neg_marking  ? score - neg_marking : score
    // const fullMark = questions.length 
    // const percentage = (score / fullMark) * 100;
    results.push({
      name: question.name,  
      questionId: question.id,
      answer: answer?.answer || 'No answer',
      isCorrect: question.answer.toLowerCase() === answer?.answer.toLowerCase(),
      correctAnswer : !hidden_answers ? question.answer : null
    }); 
  }
  let grade = 'F';
  const passed = false

  // if (passed) {
  //   if (score >= 9) {
  //     grade = 'A';
  //   } else if (score >= 7) {
  //     grade = 'B';
  //   } else if (score >= 5) {
  //     grade = 'C';
  //   } else if (score >= 3) {
  //     grade = 'D';
  //   }
  // }
  // console.log(
  //   score,
  //   results,
  //   mcqScore,
  //   fillInTheBlankScore,
  //   samplingScore,
  //   trueFalseScore,
  //   grade,
  //   passed
  // );
  return {
    score,
    results,
    grade,
    passed,
  };
};
  try {
  const supabase = createClient()
  const {data, error} = await supabase.from("submissions").select("*, quizzes(*)").eq("quiz_id", quizId).single()
    if (error) throw new Error("error fetching internel data")
    

  const {score, results, grade, passed} = getExamScore({questions: data.quizzes?.questions as QuestionType[], answers, hidden_answers : data.quizzes?.hidden_answers || false, neg_marking : data.quizzes?.neg_marking})
  console.log(score, results, grade, passed, "results")
  const {data : upDate, error : submissionErr} = await supabase.from("submissions").update({ score, results,  grade, ended_at: new Date().toISOString()}).eq("quiz_id", quizId).select('*')
  if (submissionErr) throw new Error(submissionErr.message)
    console.log(upDate, "update")
  revalidatePath(`/exams/${quizId}`)
  return {status: 'success', message: 'Submission successful'}
  } catch (error) {
    console.log(error)
    return {status: 'error', message:   `${error}`}
  }
  

}