
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Bevaragesmap from "./bevaragesmap"
import { useState } from "react"
const Bevarages = ()=>{
    const [cart,setCart] = useState([])
    const handlechange =(item)=>{
        setCart([...cart,item])
        console.log(cart)
    }
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/Bevarages.png' className='img-responsive' alt='banner' width={"100%"}/>
        <div className="row container">{Content.map((item)=>item.moduletitle==='Bevarages' ?<Bevaragesmap key={item.id}  item={item} handlechange={handlechange}/>: '')}</div>
        </div>
        </>
    )

}
export default Bevarages