export interface Note {
    id: string;
    user_id: string;
    //user: User;
    title: string;
    description:string;
    priority:  'LOW' | 'MID' | 'HIGH';
    status: 'CREATED' | 'MODIFIED' | 'DELETED' | 'FINISHED';
    image_url: string;
    first_date: Date;
    end_date: Date;
    created_at: Date;
    updated_at: Date;
}

enum PriorityEnum {
    'LOW',
    'MID',
    'HIGH'
}

enum StatusEnum {
    'CREATED',
    'MODIFIED',
    'DELETED',
    'FINISHED',
}