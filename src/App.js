import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/CartPage';
import About from './pages/About';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/ErrorComponent';

import SideCart from './components/SideCart';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    
   <>
   <Navbar/>
   <Sidebar/>
   <SideCart/>

    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/products" component={Product}/>
        <Route path="/product/:id" component={SingleProduct}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Error}/>

    </Switch>
    <Footer/>
   
   </>
  );
}

export default App;
