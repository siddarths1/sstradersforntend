import Content from "../../cardcontent/cardcontent";
import Riceandatta from "./riceandatta";
import '../../bootstrap.min.css'
const Riceandattamap =()=>{
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/rise.png' className='img-responsive' alt='banner' width={"100%"}/>
        <br></br>
        <div className="row">{Content.map((item)=>item.moduletitle==='riceandatta' ?<Riceandatta key={item.id} img = {item.image} title={item.title} price = {item.price} /> : '')}</div>
        </div>
        </>
    )
}
export default Riceandattamap