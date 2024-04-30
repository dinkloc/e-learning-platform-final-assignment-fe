export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: IUser;
}

export interface IUser {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    phoneCode: string;
    phoneNumber: string;
    gender: string;
    role: string;
    status: string;
    emailVerified: boolean;
    deletedAt?: string;
    createdAt: string;
    updatedAt: string;
    isFirstLogin: boolean;
}
