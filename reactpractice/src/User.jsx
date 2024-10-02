import React, { useState,useEffect } from 'react'
import Usequery from "./hooks/Usequery.js"

const User = () => {
  
  const {data,status,error}=Usequery("https://dummyjson.com/user")
   
      return (
    <div>
      <h1>User</h1>
{status==="error" && <p>{error}</p>}
      {status==="loading"&& <p>Loading...</p>}
      <ul>
      {status==="success"&&
        data.users.map(({id,firstName})=>(
          <li key={id}>{firstName}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default User
