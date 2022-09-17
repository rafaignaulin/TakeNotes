export interface IUpdateNoteDTO {
  note_id?: string;
  title?: string;
  description?: string;
  priority?: "LOW" | "MID" | "HIGH";
  first_date?: Date;
  end_date?: Date;
}
