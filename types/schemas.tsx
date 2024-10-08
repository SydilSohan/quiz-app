import { number, z } from "zod";
export const SignUpSchema = z
  .object({
    first_name: z.string().min(2, {
      message: "First name must be at least 2 characters long",
    }),
    last_name: z.string().min(2, {
      message: "First name must be at least 2 characters long",
    }),
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    confirm_password: z.string(),
    acceptance: z.boolean(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  })
  .refine((data) => data.acceptance === true, {
    message: "You must accept the terms and conditions",
    path: ["acceptance"],
  });

const Question = z.object({
  id: z.string(),
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  type: z.union([
    z.literal("mcq"),
    z.literal("fill"),
    z.literal("truefalse"),
    z.literal("sampling"),
  ]),
  answer: z.string().min(1, {
    message: "Answer is required.",
  }),
  options: z.array(z.string()).optional(),
  image: z.any().optional(),
});
const answer = z.object({
  id: z.coerce.number(),
  answer: z.string().min(1, {
    message: "Answer is required.",
  }),
});
const questionColumn = z.object({
  id: z.coerce.number(),
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  type: z.union([
    z.literal("mcq"),
    z.literal("fill"),
    z.literal("truefalse"),
    z.literal("sampling"),
  ]),

  options: z.array(z.string()).optional(),
  image: z.any().optional(),
});
const answersColumn = z.object({
  id: z.string(),
  answer: z.string().min(1, {
    message: "Answer is required.",
  }),
});
// .refine((data) => data.type !== "fill" && (data.options?.length ?? 0 > 1), {
//   message: "You must provide at least 2 options",
//   path: ["options"],
// });

export const QuizValuesSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  questions: z.array(Question),
  instructions: z.string().min(1, {
    message: "Instructions are required.",
  }),
  privacy: z.enum(["private", "public"]).optional(),
  time: z.coerce.number().optional(),
  logo: z.any().optional(),
  image: z.any().optional(),
  inst: z.string().optional(),
  retake: z.boolean().optional(),
  hidden_answers: z.boolean().optional(),
  neg_marking: z.coerce.number().min(0).max(10).optional(),
  pass_mark: z.coerce.number().min(1).max(99).optional(),
});
const ansSchema = z.object({
  questionId: z.string(),
  answer: z.string().optional(),
});

export const promptSchema = z.object({
  prompt: z.string().min(10, "Prompt is required"),
  difficulty: z.enum(["easy", "medium", "hard"]),
  topic: z.string().min(1, "Topic is required").optional(),
  number_of_questions: z.coerce
    .number()
    .int()
    .min(1, "Number of questions is required, minimum 1")
    .max(50, "Maximum number of questions is 50"),
});
export type PromptType = z.infer<typeof promptSchema>;

export const ExamPageFormSchema = z.record(ansSchema);
export type ExamPageFormSchemaType = z.infer<typeof ExamPageFormSchema>;
export type QuestionType = z.infer<typeof Question>;
export type AnswerType = z.infer<typeof answer>;
export type QuizValues = z.infer<typeof QuizValuesSchema>;
export type QuestionColumnType = z.infer<typeof questionColumn>;
export type AnswerColumnType = z.infer<typeof answersColumn>;
