import TableView from '@/components/TableView'
import { Button } from '@mui/material'
import { getQuizzes } from '@/services/QuizService.ts'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router'

export default function QuizList() {
  const [data, setData] = useState<Array<Array<string>>>([]); 
  const [searchParams, setSearchParams] = useSearchParams();
  const onClick = (id: string) => {
    setSearchParams({ id: id });  
  };
    
  useEffect(() => {
    getQuizzes().then(response => {
      if (response.success) {
        const newData = response.payload.map((entry) => [
          entry.name,
          entry.description,
          entry.author,
          <Button variant='contained' onClick={() => onClick(entry._id)}>View</Button>
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
