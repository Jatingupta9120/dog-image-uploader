export interface iAuthTokenInfo {
    id: string;
    role: string;
}
export interface iAuthTokens {
    accessToken: string;
    tokenType: string;
    userId: string;
}

export interface IValidateUser {
    userId?: string;
    userName?: string;
}
