import api from './api.module.ts'

type UserProps = {
  username: string;
  password: string;
};

interface HttpResponse {
  success: boolean;
  message?: string;
  payload?: any;
}

export async function postRegister({ username, password }: UserProps): Promise<HttpResponse> {
  const response = await api.post<HttpResponse>('/user/register', { username, password });
  return response;
}

export async function postLogin({ username, password }: UserProps): Promise<HttpResponse> {
  const response = await api.post<HttpResponse>('/user/login', { username, password });
  return response;
}
