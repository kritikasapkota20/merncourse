import React from 'react'
import { BrowserRouter,Route,Routes,Outlet } from "react-router-dom";
import Stack from '@mui/material/Stack';
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';
import Homepage from './Pages/Homepage';
import Product from './Pages/product';
import Navbar from "./components/Navbar"
import Homelayout from './layout/Homelayout';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
const App = () => {
  const queryclient=new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryclient}>
    <BrowserRouter>
    <Routes>
      <Route element={<Homelayout/>}>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/products' element={<Product/>}/>
    </Route>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>

<Route path="*" element={<h1>Route not found</h1>}></Route>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </div>
  )
}

export default App
