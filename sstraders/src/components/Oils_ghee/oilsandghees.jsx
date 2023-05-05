
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Oilsandgheesmap from "./oilsandgheesmap"
const Oilsandghees = ()=>{
    return(
        <>
        <div className="container">
        <br></br>
        <div>
        <img src='images/oilsgheebanner.png' className='img-responsive' alt='banner' width={"100%"}/>
        </div>
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='Oils_ghee' ?<Oilsandgheesmap key={item.id}  id ={item.id} img = {item.image} title={item.title} price = {item.price} /> : '')}</div>
        </div>
        </>
    )

}
export default Oilsandghees