'use server'

import { QuestionType } from "@/types/schemas";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
type Answer = { questionId: string; answer: string }[];

export interface ActionResponse {
  status: 'error' | 'success';
  message: string;
}

export async function getResults({answers, quizId}: {answers: Answer, quizId: number,  subId? : number}) : Promise<ActionResponse>{
 const getExamScore = ({
  questions,
  answers,
}: {
  questions: QuestionType[];
  answers: Answer;
}) => {
  let score = 0;
  let results = [];
  let samplingScore = 0;
  let mcqScore = 0;
  let trueFalseScore = 0;
  let fillInTheBlankScore = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const answer = answers.find((ans) => ans.questionId === question.id);
    if (question.answer.toLowerCase() === answer?.answer.toLowerCase()) {
      score++;
      if (question.type === 'mcq') mcqScore++;
      if (question.type === 'truefalse') trueFalseScore++;
      if (question.type === 'fill') fillInTheBlankScore++;
      if (question.type === 'sampling') samplingScore++;
    }
    results.push({
      name: question.name,
      questionId: question.id,
      answer: answer?.answer || 'No answer',
      isCorrect: question.answer.toLowerCase() === answer?.answer.toLowerCase(),
    });
  }
  let grade = 'F';
  const passed =
    samplingScore >= 1 && trueFalseScore + fillInTheBlankScore + mcqScore >= 2;

  if (passed) {
    if (score >= 9) {
      grade = 'A';
    } else if (score >= 7) {
      grade = 'B';
    } else if (score >= 5) {
      grade = 'C';
    } else if (score >= 3) {
      grade = 'D';
    }
  }
  console.log(
    score,
    results,
    mcqScore,
    fillInTheBlankScore,
    samplingScore,
    trueFalseScore,
    grade,
    passed
  );
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
    

  const {score, results, grade, passed} = getExamScore({questions: data.quizzes?.questions as QuestionType[], answers})
  console.log(score, results, grade, passed, "results")
  const {data : upDate, error : submissionErr} = await supabase.from("submissions").update({ score, results, answers, grade, ended_at: new Date().toISOString()}).eq("quiz_id", quizId).select('*')
  if (submissionErr) throw new Error("Error updating results")
    console.log(upDate, "update")
  revalidatePath(`/exams/${quizId}`)
  return {status: 'success', message: 'Submission successful'}
  } catch (error) {
    console.log(error)
    return {status: 'error', message:   JSON.stringify(error)}
  }
  

}