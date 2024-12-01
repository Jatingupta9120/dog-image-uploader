export interface User {
    fullname?: string;
    email?: string;
    username?: string;
    password?: string;
    birthdate?: Date;
}

export interface IGetUser {
    userName?: string;
    id?: string;
}

export interface IListView {
    offset?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    userType?: string;
    download?: boolean;
}