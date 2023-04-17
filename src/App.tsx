import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login'
import Result from './components/Result'


function App() {
  return ( 
    <Router>
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App
