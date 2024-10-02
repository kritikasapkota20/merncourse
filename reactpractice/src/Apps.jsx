import React, { useState,useEffect, useReducer } from 'react'
import User from "./User.jsx"
import Usequery from "./hooks/Usequery.js"

const App = () => {
  
  const {data,status,error}=Usequery("https://dummyjson.com/products")
   
      return (
    <div>
      <h1>Product</h1>
{status==="error" && <p>{error}</p>}
      {status==="loading"&& <p>Loading...</p>}
      <ul>
      {status==="success"&&
        data.products.map(({id,title})=>(
          <li key={id}>{title}</li>
        ))
      }
      </ul>
      <User/>
    </div>
  )
}

export default App

