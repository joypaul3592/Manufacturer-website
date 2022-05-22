import { Route, Routes } from 'react-router-dom';
import ProtectRoute from './Authentication/ProtectRoute';
import Blog from './Pages/Blog/Blog';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import DasMyProfiles from './Pages/Dashboard/DasMyProfiles';
import MyOrders from './Pages/Dashboard/MyOrders';
import Home from './Pages/Home/Home';
import MyProfile from './Pages/MyProfile/MyProfile';
import Product from './Pages/Product/Product';
import Login from './Pages/UserLogin/Login';
import Navbar from './Sheard/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* public Route */}
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myProfile' element={<MyProfile></MyProfile>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* public Route */}


        {/* Privet Route */}
        <Route path='/products' element={<Product />} />
        <Route path='/dashboard' element={<Dashboard>



        </Dashboard>}>

          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>

          <Route path='addReview' element={<AddReview></AddReview>}></Route>

          <Route path='myProfile' element={<DasMyProfiles></DasMyProfiles>}></Route>

        </Route>

        {/* Privet Route */}

      </Routes>

    </div>
  );
}

export default App;
