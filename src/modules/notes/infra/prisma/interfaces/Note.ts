export interface Note {
  id: string;
  user_id: string;
  //user: User;
  title: string;
  description: string;
  priority: "LOW" | "MID" | "HIGH";
  status: "CREATED" | "MODIFIED" | "DELETED" | "FINISHED";
  first_date: Date;
  end_date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface PriorityEnum {
  priority: "LOW" | "MID" | "HIGH";
}

export interface StatusEnum {
  status: "CREATED" | "MODIFIED" | "DELETED" | "FINISHED";
}
