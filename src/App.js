//import logo from './logo.svg';
import './App.css';
import Mainpage from './component/Mainpage';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Mealinfo from './component/Mealinfo';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mainpage' element={<Mainpage/>}/>
          <Route path='/:mealid' element={<Mealinfo/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
