
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Bevaragesmap from "./bevaragesmap"
import { useState } from "react"
import Footer from "../../../Footer"
const Bevarages = ()=>{
    
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/Bevarages.png' className='img-responsive' alt='banner' width={"100%"}/>
        <div className="row container">{Content.map((item)=>item.moduletitle==='Bevarages' ?<Bevaragesmap key={item._id}  id ={item._id} img = {item.image} title={item.title} price = {item.price} qty = {item.qty} />: '')}</div>
        <br /> <br />
        </div>
        <Footer/>
        </>
    )

}
export default Bevarages