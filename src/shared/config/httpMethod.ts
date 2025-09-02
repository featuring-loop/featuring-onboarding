import axios, { type AxiosRequestConfig } from 'axios';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export function createConfig<Body extends object>(body?: Body): AxiosRequestConfig {
	return {
		headers: {
			'Content-Type': 'application/json',
		},
		data: body,
	};
}

export const axiosInstance = axios.create({
	baseURL: process.env.API_BASE_URL,
});

export async function httpMethod<Data>(url: string, method: HttpMethod, body?: object): Promise<Data | undefined> {
	try {
		const response = await axiosInstance({
			url,
			method,
			...createConfig(body),
		});

		return response.data as Data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(error.response?.statusText || 'Axios Request failed');
		}
		return undefined;
	}
}
