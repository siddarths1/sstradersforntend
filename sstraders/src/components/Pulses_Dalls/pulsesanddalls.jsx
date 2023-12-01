
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Pulsesanddallsmap from "./pulsesanddallsmap"
import Footer from "../../../Footer"
const Pulsesanddalls = (props)=>{
    // const Content = props
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/dallsandpulses.png' className='img-responsive' alt='banner' width={"100%"}/>
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='Pulses' ?<Pulsesanddallsmap key={item._id}  id ={item._id} img = {item.image} title={item.title} price = {item.price} qty={item.qty}/> : '')}</div>
        <br /><br />
        </div>
        <Footer/>
        </>
    )

}
export default Pulsesanddalls