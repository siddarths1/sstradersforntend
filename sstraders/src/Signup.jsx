import React from 'react'
import axios from 'axios';
import  { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
 
    const[name,setname] = useState('');
    const[email,setemail] = useState('');
    const[password,setpassword] = useState('');
    const navigate = useNavigate();
    const submit=async(e)=>
    {
      e.preventDefault();
        try
        {
          console.log(email);
             await axios.post("http://localhost:5000/Signup",{name,email,password})
             .then(res=>{
                if(res.data=="exist"){
                  alert("user already exist")
                }
                else if(res.data == "not exist")
                { 
                    navigate("/Login")
                }
              })
             
           .catch(e=>{
               alert("wrong details")
              console.log(e)
           })
        }
        catch(e)
        {
            console.log(e);
        }
    } 
  

  return (
    <div className='container row mx-auto col-md-6 '>
         <h1>Sign in</h1>
         <form action="POST">
  <div class="col-md-6 mb-3">
    <label>Name</label>
    <input type="text"  class="form-control" id="name" placeholder="Enter your name"  onChange={(e)=>{setname(e.target.value)}}   />
  </div>
  <div class="col-md-6 mb-3">
    <label >Email address</label>
    <input type="email" class="form-control"  id="email" placeholder="Enter your email"  onChange={(e)=>{setemail(e.target.value)}} value={email}/>
  </div>
  <div class="col-md-6 mb-3">
    <label >Password</label>
    <input type="password" class="form-control" id="password" placeholder="Enter your password" onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={submit} >Submit</button>
</form>

<br/>
    <h4>Loginn</h4>
     <Link to="/Login" >click here</Link>
    </div>
   
  )

}