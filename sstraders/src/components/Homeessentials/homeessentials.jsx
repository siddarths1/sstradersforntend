
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Homeessentialsmap from "./homeessentialsmap"
const Homeessentials = ()=>{
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/homeneeds.png' className='img-responsive' alt='banner' width={"100%"}/>
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='House' ?<Homeessentialsmap key={item.id}  id ={item.id} img = {item.image} title={item.title} price = {item.price} /> : '')}</div>
        </div>
        </>
    )

}
export default Homeessentials