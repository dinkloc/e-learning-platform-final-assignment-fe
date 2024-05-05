import { LoginRequest, LoginResponse } from "../types/auth";
import Instance from "./instance";

const login = async (params: LoginRequest): Promise<LoginResponse> => {
    return await Instance.post(`/auth/login`, params);
};

const logout = async () => {
    return await Instance.post(`/auth/logout`);
}

const AuthService = {
    login,
    logout
}

export default AuthService;
