import QuizList from './QuizList.module.tsx'
import QuizView from './QuizView.module.tsx'
import { useSearchParams } from 'react-router'

export default function QuizPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  if (searchParams.get('id') === null) {
    return (
      <>
        <QuizList/>
      </>
    );
  }

  return (
    <></>
  );
}
