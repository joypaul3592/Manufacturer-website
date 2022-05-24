import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectRoute from './Authentication/ProtectRoute';
import Blog from './Pages/Blog/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import DasMyProfiles from './Pages/Dashboard/DasMyProfiles';
import EditProfile from './Pages/Dashboard/EditProfile';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import Home from './Pages/Home/Home';
import MyProfile from './Pages/MyProfile/MyProfile';
import Login from './Pages/UserLogin/Login';
import SignUp from './Pages/UserLogin/SignUp';
import Navbar from './Sheard/Navbar';
import RequireAdmin from './Sheard/RequireAdmin';
import RequireAuth from './Sheard/RequireAuth';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* public Route */}
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='myProfile' element={<RequireAuth><MyProfile></MyProfile></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
        {/* public Route */}


        {/* Privet Route */}
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

          <Route path='myOrders' element={<RequireAuth><MyOrders></MyOrders></RequireAuth>}></Route>
          <Route path='addReview' element={<RequireAuth><AddReview></AddReview></RequireAuth>}></Route>
          <Route path='myProfile' element={<RequireAuth><DasMyProfiles></DasMyProfiles></RequireAuth>}></Route>

          {/* for admin */}
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>

        </Route>

        {/* Privet Route */}

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
