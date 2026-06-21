import { getQuizByAuthor } from '@/services/QuizService.ts'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router'
import TableView from '@/components/TableView'
import { Button } from '@mui/material'

export default function CreateListPage() {
  const [data, setData] = useState<Array<Array<string>>>([]); 
  const [searchParams, setSearchParams] = useSearchParams();
  const onClick = (id: string) => {
    setSearchParams({ id: id });  
  };
    
  useEffect(() => {
    getQuizByAuthor({ author: localStorage.getItem('username') }).then(response => {
      if (response.success) {
        const newData = response.payload.map((entry) => [
          entry.name,
          entry.description,
          entry.author,
          <Button variant='contained' onClick={() => onClick(entry._id)}>Edit</Button>
        ]);

        console.log(newData);
        setData(newData);
      }
      else {
        console.warn('Failed to fetch quizzes');
      }
    })
    .catch(error => { console.error(error) });
  }, []);

  return (
    <> 
      <TableView
        headers={['Name', 'Description', 'Author', '']}
        rows={data}
      />
    </> 
  );
}
