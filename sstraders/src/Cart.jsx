import { useEffect, useState } from "react"
import AddtoCart from "./Cart/addtocart"
import axios from "axios"

const Cart= ()=>{
    const [list,setList]=useState([])
    const [price,setPrice] = useState()
    const [flag,setFlag]=useState(true)
    const [order,setOrder] =useState(false)
    const [pay,setPay] = useState(false)

    //order
    const[name,setname] = useState("");
    const[email,setemail] = useState("");
    const[phone,setphone] = useState("");
    const[address,setaddress] = useState("");

    useEffect(()=>
    {
        axios.get(`http://localhost:5000/cart/${localStorage.getItem("email")}`)
        .then(resp=>
            {
                setList(resp.data.items)
                var total=0;
                for (let x=0;x<list.length;x++)
                {
                    total+=list[x].need * list[x].price;
                }
                setPrice(total)
            })
            .catch(error=>
                {
                    console.log(error)
                })
    },[flag,list])

    const handlechange=(flag,id)=>
    {
        console.log(flag)
        axios.patch(`http://localhost:5000/change`,{"email":localStorage.getItem("email"),"productid":id,"flag":flag})
        .then(resp=>
            {
                console.log(resp)
            })
            .catch(error=>
                {
                    console.log(error)
            })
    }

    console.log(list)

    //payement
    // const[product,setproduct] = useState({
    //     name:"hi",
    //     price:250,
    // })

    const initPayment =(data)=>{
        const options ={
            Key:"rzp_test_fkyZ0jEdjY2o4F",
            amount:data.amount,
            currency:data.currency,
            // name:data.name,
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
            const {data} = await axios.post(orderUrl,{amount:price})
            // console.log(data) 
            initPayment(data.data)
        }
        catch(err)
        {
            console.log(err)
        }
    }
    return(
        <>
        <center>
 {list?
 <>
        <table width={100} border={"2%"}>
                <tr>
                    <th>Product Id</th>
                    <th>Need</th>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Wight</th>
                    <th>Price</th>
                </tr>
                {
                    list.map((i,ind)=>{
                        return <>
                           <tr key={i.productid}>                 
                                <td>{i.productid}</td>
                                <td><pre><button onClick={()=>{
                                    handlechange(1,i.productid)
                                    setFlag(!flag)
                                    }}>+</button><input maxlength="4" size="4" value={i.need}></input><button onClick={()=>{
                                     handlechange(-1,i.productid)
                                     setFlag(!flag)
                                    }}>-</button></pre></td>
                                <td> <img src={i.image} alt="pic" width={100} height={100} /></td>
                                <td>{i.title}</td>
                                <td>{i.qty}</td>
                                <td>{i.price}</td>  
                                {/* <button onClick={(e)=>handlechange(i._id,true,e)}>Add</button>
                                <button onClick={()=>handlechange(i._id,false)}>Sub</button> */}
                            </tr>

                        </>
                    })
                }
            </table>
            <hr />
            <h3>Total Amount Is : {price}</h3>
            <button className="btn btn-success" onClick={() => setOrder(!order)}>BuyNow</button>
            {/* {setPrice(list.reduce((total, item) => total + item.need * item.price, 0))} */}
                {/* {price} */}
            {order ?<>
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
                    <button type="button" class="btn btn-outline-success" onClick={()=> setPay(!pay)}>Success</button>
                    </div>
                </div>

                </div>

                {pay ? <>
                    <div>
                        <h2>Total Amount</h2>
                        <h2>{price}</h2>
                        <button   onClick={HandlePayment} >Place Your Order</button>
                    </div>
                </> :""}

            </>:""}
            </>
            :
            <>
            <h1>No Items in Cart</h1>
            <a href="/"><button className="btn btn-info">Contine Shopping</button></a>
            </>
}

            </center>
            {/* <AddtoCart id={props.id} img = {props.img} title={props.title} price={props.price} /> */}
        </>
    )
}
export default Cart