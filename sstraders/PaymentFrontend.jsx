import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export default function PaymentFrontend() 
{
    const[product,setproduct] = useState({
        name:"hi",
        price:250,
    })

    const initPayment =(data)=>{
        const options ={
            Key:"rzp_test_fkyZ0jEdjY2o4F",
            amount:data.amount,
            currency:data.currency,
            name:data.name,
            order_id:data.id,
            handler:async(response) =>{
                try{
                    const verifyUrl ="http://localhost:5000/api/payment/verify"
                    const {data} = await axios.post(verifyUrl,response)
                    console.log(data)
                }catch(err){
                    console.log(err)
                }
            },
            theme:{
                color:"#3399cc"
            }
        

        }
        const rzp1 = new window.Razorpay(options)
        rzp1.open()

    }

    const HandlePayment = async()=>{
        try{
            const orderUrl = "http://localhost:5000/api/payment/orders"
            const {data} = await axios.post(orderUrl,{amount:product.price})
            console.log(data) 
            initPayment(data.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

  return (
    <div>
        PaymentFrontend
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <button   onClick={HandlePayment} >Buy</button>
    </div>
  )
}
