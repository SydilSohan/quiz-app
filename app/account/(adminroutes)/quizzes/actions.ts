'use server'
import { createClient } from "@/utils/supabase/server";



import { z } from "zod";
import Groq from "groq-sdk";
import { PromptType } from "@/types/schemas";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const Question = z.object({
  id: z.string(),
  name: z.string(),
  type: z.union([
    z.literal("mcq"),
    z.literal("fill"),
    z.literal("truefalse"),
    z.literal("sampling"),
  ]),
  answer: z.string(),
  options: z.array(z.string()).optional(),
});
const aiSchema = z.object({
  name: z.string(),
  questions: z.array(Question),
  instructions: z.string(),
});
export async function generateQuiz({topic, prompt, number_of_questions, difficulty} : PromptType)  {
    const supabase = createClient();
    const {data : { user}} = await supabase.auth.getUser()
    try {
        if ( !user) throw new Error("User not found")
        const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "system",
        "content":  `You are a helpful assistant that generates high-quality quizzes on various topics. Each quiz should consist of multiple-choice questions (MCQs) with one correct answer and three incorrect answers. Ensure the questions are clear, concise, and relevant to the specified topic and difficulty level. Strictly Follow json format with below zod schema
{
  "name": "Sample Quiz",
  "questions": [
    {
      "id": "1",
      "name": "What is the capital of France?",
      "type": "mcq",
      "answer": "Paris",
      "options": ["Paris", "London", "Berlin", "Madrid"]
    },
    {
      "id": "2",
      "name": "Which planet is known as the Red Planet?",
      "type": "mcq",
      "answer": "Mars",
      "options": ["Earth", "Mars", "Jupiter", "Saturn"]
    }
  ],
  "instructions": "Please select the correct answer for each question."
}
        `
      },
      {
        "role": "user",
        "content": `Generate a quiz with ${number_of_questions} questions with prompt ${prompt} and ${difficulty} difficulty `
      }
    ],
    "model": "llama-3.1-70b-versatile",
    "temperature": 1,
    "max_tokens": 8000,
    "top_p": 1,
    "stream": false,
    "response_format": {
      "type": "json_object"
    },
    "stop": null
  });

  const event = chatCompletion.choices[0].message.content
    if (!event) throw new Error("No content found in response");
    const parsedData = JSON.parse(event) as z.infer<typeof aiSchema>;
    console.log(parsedData, "data")
    const {data, error} = await supabase.from("quizzes").insert({
        user_id: user.id,
        ...parsedData,
    })
    if (error) throw new Error("An error occurred while inserting quiz")
    return {status: "success", message : "Quiz generated successfully"}
    } catch (error) {
        console.log(error, "error")
        return {status: "error", message: `${error}`}
    }


}


