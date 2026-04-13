import z from "zod";

export const createProjectSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().optional(),
})

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .optional(),

  status: z
    .enum(["todo", "in_progress", "done"], {
      errorMap: () => ({ message: "Invalid status" }),
    }),

  priority: z
    .enum(["low", "medium", "high"], {
      errorMap: () => ({ message: "Invalid priority" }),
    }),

  assignee_id: z
    .string()
    .nullable()
    .optional(),

  due_date: z
    .union([z.string(), z.date()])
    .optional(),
});