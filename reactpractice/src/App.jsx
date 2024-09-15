import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from "./Todo"
export const GrandParentName=useContext(null);
function children(){
  return(
    <>
    <p>
      My father name is:{},grand parent name is:{}
    </p>
    </>
  )
}

function App() {
  
  return (
    <>
    {/* <Todo/> */}
 
    </>
  )
}

export default App
