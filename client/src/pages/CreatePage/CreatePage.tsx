import CreateListPage from './CreateListPage.module.tsx'
import CreateAddPage from './CreateAddPage.module.tsx'
import { useSearchParams } from 'react-router'

export default function CreatePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  if (searchParams.get('id') === null) {
    return (
      <>
        <CreateListPage/>
      </>
    );
  } 

  return (
    <>
      <CreateAddPage/>
    </>
  );
}
