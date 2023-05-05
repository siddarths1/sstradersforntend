
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Masalasmap from "./masalasmap"
const Masalas = ()=>{
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/masalabanner.png' className='img-responsive' alt='banner' width={"100%"}/>
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='Masala_Spices' ?<Masalasmap key={item.id}  id ={item.id} img = {item.image} title={item.title} price = {item.price} /> : '')}</div>
        </div>
        </>
    )

}
export default Masalas