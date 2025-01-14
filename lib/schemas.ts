import { z } from "zod";

export const questionSchema = z.object({
  question: z.string(),
  answer: z.string()
});

export type Question = z.infer<typeof questionSchema>;

export const questionsSchema = z.array(questionSchema).length(20);
