import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Result from './components/Result'
import ErrorComp from './components/ErrorComp';


function App() {
  return ( 
    <Router>
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/result/:answer/:image' element={<Result />} />
        <Route path='/error/:error' element={<ErrorComp />} />
      </Routes>
    </Router>
  );
}

export default App
