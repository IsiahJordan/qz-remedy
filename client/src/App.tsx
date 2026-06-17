import { postRegister } from './services/UserService.ts'

function App() {
  postRegister({ username: 'Noob', password: 'test212' }).then(response => {
    console.log('Registration success:', response);
  })
  .catch(error => {
    console.error('Registration failed:', error);
  });

  return (
    <>
    </>
  )
}

export default App
