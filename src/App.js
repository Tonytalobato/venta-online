import './App.css';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import SignIn from './pages/sign-in/sign-in';
import Checkout from './pages/checkout/checkout';
import ProductList from './pages/productList/productList';


const App = () => {

    return (
    
      <>
      <NavBar/>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/shop/:category' element={<ProductList />} />

      </Routes>
      </>
    );
};

export default App;
