import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import PurchasePage from './Components/PurchasePage';
import RequireAuth from './Components/RequireAuth';
import SignUp from './Components/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllProducts from './Pages/Home/AllProducts';
import BusinessSummary from './Pages/Home/BusinessSummary';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>

          <Route path='/product' element={<AllProducts></AllProducts>}></Route>
          <Route path='/business-summary' element={<BusinessSummary></BusinessSummary>}></Route>
          <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='profile' element={<MyProfile></MyProfile>}></Route>
            <Route path='users' element={<Users></Users>}></Route>
          </Route>

          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/product/:productId' element={
            <RequireAuth>
              <PurchasePage></PurchasePage>
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        <ToastContainer />
      </Navbar>
      
    </div>

  );
}

export default App;
