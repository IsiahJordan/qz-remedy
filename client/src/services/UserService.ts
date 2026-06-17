import api from './api.module.ts'

export type UserProps = {
  username: string;
  password: string;
};


export interface HttpResponse {
  success: boolean;
  message?: string;
  payload?: any;
}

export async function postRegister({ username, password }: UserProps): Promise<HttpResponse> {
  const response = await api.post<HttpResponse>('/user/register', { username, password });
  return response;
}

