import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/LoginForm/Login'
import Result from './components/ResultComponent/Result'
import Header from './components/Header/Header'


function App() {
  return ( 
    <Router>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
         <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </main>
      <footer className='footer'>
        <Header />
      </footer>
    </Router>
  );
}

export default App
