import api from './api.module.ts'

interface HttpResponse {
  success: boolean;
  message?: string;
  payload?: any;
}

export async function getQuizzes(): Promise<HttpReponse> {
  const response = await api.get<HttpResponse>('/quiz');
  return response;
}


