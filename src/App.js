import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import PurchasePage from './Components/PurchasePage';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div>
      <Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/product/:productId' element={<PurchasePage></PurchasePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
