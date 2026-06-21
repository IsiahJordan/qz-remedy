import { useSearchParams } from 'react-router'
import SignInPage from './SignInPage.module.tsx'
import SignUpPage from './SignUpPage.module.tsx'

export default function SignPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  if (searchParams.get('type') === 'in') {
    return (
      <>
        <SignInPage/>
      </>  
    ); 
  }
  else if (searchParams.get('type') === 'out') {
    localStorage.clear();
    return (
      <>
        <SignInPage/>
      </>  
    ); 
  }

  return (
    <>
      <SignUpPage/>
    </>
  );
}
