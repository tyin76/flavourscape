import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage.js'
import RecipeInfo from './components/RecipeInfo.js';
import RecipePage from './pages/RecipesPage.js'


function App() {
  return (
    <>
   <BrowserRouter>
   <NavBar />

   <Routes>
   <Route path='/' exact Component={Home}/>
   <Route path='/recipes/:recipeId' exact Component={RecipeInfo}/>
   <Route path='/recipes' exact Component={RecipePage} />
  
  
   </Routes>
   </BrowserRouter>
  
  </>
  )
 
}

export default App;
