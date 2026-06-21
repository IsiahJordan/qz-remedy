import Form from '@/components/Form'
import { useState } from 'react'
import Logo from '@/assets/Logo.png'
import { Button } from '@mui/material'
import { postLogin } from '@/services/UserService.ts'
import { useNavigate } from 'react-router'

export default function SignInPage() {
  const [fields, setFields] = useState<Array<string>>(['', '']); 
  const navigate = useNavigate();

  const onSubmit = () => { 
    postLogin({ username: fields[0], password: fields[1] }).then(response => {
      console.log('Successful login: ', response);
      if (response.success) {
        navigate('/');
        localStorage.setItem('id', response.payload.id);
        localStorage.setItem('username', response.payload.username);
      }
      else {
        console.warn('failed to login'); 
      }
    })
    .catch(error => {
      console.error('Login error: ', error);
    });
  };

  return (
    <>
      <Form
        labels={['Username', 'Password']}
        placeholders={['Enter Username...', 'Enter Password...']}
        types={['text', 'password']}
        fields={fields}
        setFields={setFields}
        topChildren={<img src={Logo} alt='Logo.png' style={{ height: '30%', width: '30%' }} />}
        botChildren={
          <>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#1A2332' }}
              onClick={() => onSubmit()}
            >
              SIGN IN
            </Button>
            <Button variant='text'>
              CREATE ACCOUNT
            </Button>
          </>
        }
      />
    </>
  );
}
