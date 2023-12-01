import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function OrderDetails() 
{
    const[name,setname] = useState("");
    const[email,setemail] = useState("");
    const[phone,setphone] = useState("");
    const[address,setaddress] = useState("");
    const nav = useNavigate();
    
    async function Handlesubmit(event)
    {
        event.preventDefault()
        try{
                console.log(name,email,phone,address)
            //  await axios.post("http://localhost:3001/OrderDetails",{name,email,phone,address})
             alert("your details saved")
             nav('/Payment')
        }
        catch(err){
                console.log(err)
        }
    }


  return (
    <div>
        <h3>OrderDetails</h3>
       
        <div className='mx-auto form-floating col-md-6'>
        <div class="form-floating  mb-3">
        <input type="text" class="form-control"  placeholder="name.initial" onChange={(e)=>{setname(e.target.value)}}/>
        <label>Name</label>
        </div>
        <div class="form-floating mb-3" >
        <input type="email" class="form-control"  placeholder="email@mail.com"  onChange={(e)=>{(setemail(e.target.value))}} />
        <label>Email</label>
        </div>
        <div class="form-floating mb-3 ">
        <input type="number" class="form-control" placeholder='enter phone number' onChange={(e)=>{setphone(e.target.value)}} />
        <label>Phone</label>
        </div>
        <div class="form-floating mb-3">
        <input type="text-area" class="form-control" placeholder='enter address' onChange={(e)=>{setaddress(e.target.value)}}/>
        <label>Address</label>
        </div>
        <div class="form-floating mx-auto mb-3 text-center">
        <button type="button" class="btn btn-outline-success"  onClick={Handlesubmit}>Success</button>
        </div>
    </div>

    </div>
  )
}
