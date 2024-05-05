import { authActions } from "../stores/slices/auth";
import { store } from "../stores/index";
import Axios, { AxiosRequestConfig, AxiosResponse, CancelTokenSource } from "axios";

const baseUrl = "http://localhost:5000";

const Instance = Axios.create({
    timeout: 20000,
    baseURL: baseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

let isTokenExpired = false;
let cancelTokenSource: CancelTokenSource;

Instance.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
        if (isTokenExpired) {
            cancelTokenSource.cancel('Token expired');
        } else {
            cancelTokenSource = Axios.CancelToken.source();
            config.cancelToken = cancelTokenSource.token;
        }

        const state = store.getState();
        const accessToken = state.auth?.token as string;
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

        if (accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`,
                'X-Timezone': tz,
            };
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

Instance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (
            response.config?.url
        ) {
            return response.data;
        }
        if (response.data?.code === 200) {
            return response.data.data || response.data;
        } else {
            return Promise.reject(response.data);
        }
    },
    async (error: any) => {
        const { response } = error;

        const statusCode = response?.status;
        if (statusCode === 401) {
            isTokenExpired = true;
            // store.dispatch(authActions.logout());
            window.location.href = '/login';
        }
        if (statusCode === 403) {
            window.location.href = '/not-permission';
        }
        if (
            statusCode === 400
        ) {
            throw response.data;
        }

        const errorMessage = response?.data?.message || 'Error';
        if (errorMessage) {
            return Promise.reject(new Error(errorMessage));
        }
        return Promise.reject(error);
    }
);

export default Instance;

