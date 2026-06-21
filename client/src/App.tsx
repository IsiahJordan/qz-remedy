import { Routes, Route } from 'react-router'

import HomePage from './pages/HomePage'
import SignPage from './pages/SignPage'
import QuizPage from './pages/QuizPage'
import CreatePage from './pages/CreatePage'

import NavLayout from './layouts/NavLayout.tsx';

function App() {
  return (
    <Routes>
      <Route element={<NavLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/quiz' element={<QuizPage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Route>
      <Route path='/sign' element={<SignPage/>}/>
    </Routes>
  );
}

export default App
