import React, { createContext } from 'react'

import { useContext } from 'react'
import { useState } from 'react'

const Context =  React.createContext();


export default function UserValidation(props) {

    const [details,setdetails] = useState([]);
    
    const Store=(email,pass)=>{
            setdetails([...details,{"email":email,"password":pass}])
            console.log(details)
    }

    return(
   <div>
    <Context.Provider  value={{details,Store}}> 
       {props.children}
    </Context.Provider>
   </div> 
  )
}

export const Func=()=>{
    return useContext(Context)
}
