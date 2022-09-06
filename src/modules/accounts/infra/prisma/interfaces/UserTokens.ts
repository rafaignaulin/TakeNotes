import { User } from "./User";

export interface UserTokens {
  id: string;
  refresh_token: string;
  user_id: string;
  // user: User;
  expires_date: Date;
  created_at: Date;
}
