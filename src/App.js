import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage.js'

function App() {
  return (
    <>
   <BrowserRouter>
   <NavBar />

   <Routes>
   <Route path='/' exact Component={Home}/>
   
  
  
   </Routes>
   </BrowserRouter>
  
  </>
  )
 
}

export default App;
