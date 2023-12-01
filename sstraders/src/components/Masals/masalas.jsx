
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Masalasmap from "./masalasmap"
import Footer from "../../../Footer"
const Masalas = ()=>{
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/masalabanner.png' className='img-responsive' alt='banner' width={"100%"}/>
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='Masala_Spices' ?<Masalasmap key={item._id}  id ={item._id} img = {item.image} title={item.title} price = {item.price} qty={item.qty} />: '')}</div>
        <br />  <br />
        </div>
        <Footer/>
        </>
    )

}
export default Masalas