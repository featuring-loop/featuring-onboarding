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

export async function httpMethod<Data>(url: string, method: HttpMethod, body?: object): Promise<Data> {
	try {
		const response = await axiosInstance({
			url,
			method,
			...createConfig(body),
		});

		return response.data as Data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const errorMessage =
				error.response?.data?.message || error.response?.statusText || error.message || '네트워크 요청에 실패했습니다';
			throw new Error(errorMessage);
		}
		throw new Error('알 수 없는 오류가 발생했습니다');
	}
}
