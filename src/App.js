import './App.css';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  let navigate = useNavigate
  return (
    <> 
      <BrowserRouter navigate={navigate}>
        <Navbar/>
        
      </BrowserRouter>
    </>
  );
}

export default App;