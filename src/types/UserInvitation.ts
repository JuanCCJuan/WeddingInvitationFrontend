export type Status = "PENDING" | "ACCEPTED" | "CANCELED";

export interface UserInvitation {
    _id: string;
    head: string;
    status: Status;
    guests: string[];
}
