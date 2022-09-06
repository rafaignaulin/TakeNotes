import { Note } from "@modules/notes/infra/prisma/interfaces/Note";

export interface User {
  id: string;
  email: String;
  name: String;
  username: String;
  password?: String;
  notes?: Note[];
  created_at?: Date;
  updated_at?: Date;
}
