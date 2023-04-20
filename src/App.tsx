import MyHeader from './components/MyHeader';
import MyContent from './components/MyContent';
import MyFooter from './components/MyFooter';
import { useEffect } from 'react';

function App() {
  return (
  <main>
   <MyHeader />
    <div className="container">
      <MyContent />
    </div>
    <MyFooter />
  </main>
  );
}

export default App
