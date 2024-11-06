import React, { useEffect } from 'react'
import { BrowserRouter,Route,Routes,Outlet, Navigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';
import Orders from './Pages/orders';

import Homepage from './Pages/Homepage';
import Product from './Pages/product';
import Navbar from "./components/Navbar"
import Homelayout from './layout/Homelayout';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import {useState,useContext,createContext} from "react";
import Cart from './Pages/Cart';
import  Dashboard  from './Pages/Dashboard';
import Dashboardlayout from "./layout/Dashboardlayout"
import DashboardProduct from "./Pages/Dashboard/DashboardProduct"
export const authcontext=createContext();
const queryclient=new QueryClient();
export const ProtectedRoutes=()=>{
  const {authUser}=useContext(authcontext);
  if(authUser)return <Outlet/>
  return <Navigate to="/sign-in"/>
}
const App = () => {
  const [cart, setcart] = useState(() => {
    // const authUser = JSON.parse(localStorage.getItem("authUser"));
    // if (authUser) {
    //   return JSON.parse(localStorage.getItem(`cart_${authUser.email}`)) ?? [];
    // }
   const storedcart= localStorage.getItem("cart")

    return storedcart? JSON.parse(storedcart):[];

  });
  useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])
  const [authUser,setAuthUser]=useState(()=>{
    return JSON.parse(localStorage.getItem("authUser"));
  })
  return (
    <div>
      <authcontext.Provider value={{authUser,setAuthUser,cart,setcart}}>
        <QueryClientProvider client={queryclient}>
    <BrowserRouter>
    <Routes>
      <Route element={<Homelayout/>}>
    <Route path='/' element={<Homepage/>}/>
    <Route element={<ProtectedRoutes/>} >    <Route path='/order' element={<Orders/>}/></Route>


    <Route path='/products' element={<Product/>}/>

    <Route path='/cart' element={<Cart/>}
    />
    </Route>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route element={<Dashboardlayout/>}>

      <Route path='/Dashboard/products' element={<DashboardProduct/>}/>

      </Route>

<Route path="*" element={<h1>Route not found</h1>}></Route>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </authcontext.Provider>
      
    </div>
  )
}

export default App
