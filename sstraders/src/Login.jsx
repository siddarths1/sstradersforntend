import  axios  from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {
 
    const[name,setname] = useState('');
    const[email,setemail] = useState('');
    const[password,setpassword] = useState('');
    const navigate = useNavigate();
   
    async function submit(e)
    {
        e.preventDefault();
        try{
           await axios.post("http://localhost:5000/Login",{
            name,email,password  //body object
           })
           .then(res=>{
            console.log(res);
             if(res.data=="exist"){
               console.log(res.data)
               localStorage.setItem("username", JSON.stringify(name));
               localStorage.setItem("email", JSON.stringify(email));
               localStorage.setItem("cart",[])
               navigate("/",{state:{id:name}})
             }
             else if(res.data == "not exist")
             {
                alert("Sign Up First")
             }
           }
           ).catch((err)=>{console.log(err)});
        }
        catch(e){
           console.log(e)
        }
    }

  return (
    <div className='container row mx-auto col-md-6 '>
         <h1>Login</h1>
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
    <h4>sign upp</h4>
     <Link to="/Signup" >click here</Link>
    </div>
   
  )
}

