import React from 'react'
import{createBrowserRouter, createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import MainLayout from './layout/MainLayout'
import { ABOUT_ROUTE, CART_ROUTE, CONTACT_ROUTE, FAILURE_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PAYMENT_ROUTE, PRODUCT_ROUTE, REGISTER_ROUTE, SUCCESS_ROUTE } from './constants/route'
import ProductList from './pages/products/List'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/products/Details'
import AuthLayout from './layout/AuthLayout'
import UnAuthLayout from './layout/UnAuthLayout'
import AddProduct from './pages/products/Add'
import EditProduct from './components/products/Edit'
import ProductCart from './pages/products/ProductCart'
import Payment from './pages/payment/Payment'
import Failure from './pages/payment/Failure'
import Success from './pages/payment/Success'

// import ErrorPage from './pages/ErrorPage'


const Routes = () => {
    const router=createBrowserRouter(createRoutesFromElements(


    <Route element={<MainLayout/>}>
   <Route element={<AuthLayout/>}>
   <Route path={HOME_ROUTE} element={<Home/>}/>
    <Route path={ABOUT_ROUTE} element={<About/>}/>
    <Route path={CONTACT_ROUTE} element={<Contact/>}/>
    <Route path={CART_ROUTE} element={<ProductCart/>}/>
    <Route path={PAYMENT_ROUTE} element={<Payment/>}/>
    <Route path={FAILURE_ROUTE} element={<Failure/>}/>
    <Route path={SUCCESS_ROUTE} element={<Success/>}/>
    <Route path={PRODUCT_ROUTE}>
      <Route index element={<ProductList/>}/>
      <Route path={':id'} element={<ProductDetails/>}/>
      <Route path={'add'} element={<AddProduct/>}/>
      <Route path={'edit/:id'} element={<EditProduct/>}/>
      </Route>
   </Route>
      
    <Route element={<UnAuthLayout/>}>
    <Route path={LOGIN_ROUTE} element={<Login/>}/>
    <Route path={REGISTER_ROUTE} element={<Register/>}/>

    </Route>
    <Route path="*" element={<NotFound/>}/>
    
 </Route>
    ))
  return <RouterProvider router={router}/>
}

export default Routes