
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Homeessentialsmap from "./homeessentialsmap"
import Footer from "../../../Footer"
const Homeessentials = ()=>{
    console.log(Content)
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/homeneeds.png' className='img-responsive' alt='banner' width={"100%"}/>
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='House' ?<Homeessentialsmap key={item._id}  id ={item._id} img = {item.image} title={item.title} price = {item.price} qty={item.qty} />  : '')}</div>
        <br /> <br />
        </div>
        <Footer/>
        </>
    )

}
export default Homeessentials