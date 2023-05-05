
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Pulsesanddallsmap from "./pulsesanddallsmap"
const Pulsesanddalls = ()=>{
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/dallsandpulses.png' className='img-responsive' alt='banner' width={"100%"}/>
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='Pulses' ?<Pulsesanddallsmap key={item.id}  id ={item.id} img = {item.image} title={item.title} price = {item.price} /> : '')}</div>
        </div>
        </>
    )

}
export default Pulsesanddalls