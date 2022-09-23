import { Note } from "@modules/notes/infra/prisma/interfaces/Note";

export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  password?: string;
  notes?: Note[];
  created_at?: Date;
  updated_at?: Date;
}
