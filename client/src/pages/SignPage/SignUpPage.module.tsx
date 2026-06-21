import { useState } from 'react'
import { postRegister } from '@/services/UserService.ts'
import { useNavigate } from 'react-router'
import Form from '@/components/Form'
import Logo from '@/assets/Logo.png'
import { Button } from '@mui/material'

export default function SignUpPage() {
  const [fields, setFields] = useState<Array<string>>(['', '', '']); 
  const navigate = useNavigate();

  const onSubmit = () => { 
    if (fields[1] !== fields[2]) {
      console.warn("Password doesn't macth");
      return;
    }
    postRegister({ username: fields[0], password: fields[1] }).then(response => {
      console.log('Successful login: ', response);
      if (response.success) {
        navigate('/sign?type=in');
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
        labels={['Username', 'Password', 'Re-Password']}
        placeholders={['Enter Username...', 'Enter Password...', 'Confirm Password...']}
        types={['text', 'password', 'password']}
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
              CREATE ACCOUNT
            </Button>
            <Button variant='text' onClick={() => navigate('/sign?type=in')}>
              PROCEED TO LOGIN
            </Button>
          </>
        }
      />
    </>
  );
}
