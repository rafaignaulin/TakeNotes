export interface ICreateNoteDTO {
    user_id: string,
    title: string;
    description:string;
    priority: 'LOW' | 'MID' | 'HIGH';
    first_date: Date;
    end_date: Date;
    id?: string;
}
