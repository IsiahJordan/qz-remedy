import api from './api.module.ts'

interface HttpResponse {
  success: boolean;
  message?: string;
  payload?: any;
}

type QuizProps = {
  name?: string;
  description?: string;
  author?: string;
};

export async function getQuizzes(): Promise<HttpReponse> {
  const response = await api.get<HttpResponse>('/quiz');
  return response;
}

export async function getQuizByAuthor({ author }: QuizProps): Promise<HttpResponse> {
  const response = await api.get<HttpResponse>(`/quiz/author/${author}`);
  return response; 
}

