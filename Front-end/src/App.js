import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import HomePortel from './components/homeportel';
import Food from './components/food';


function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Register/>}/>
        <Route path='/home/*' element={<HomePortel/>}/>
      
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
