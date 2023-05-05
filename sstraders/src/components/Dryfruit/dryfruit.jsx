
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Dryfruitmap from "./dryfruitmap"
const Dryfruit = ()=>{
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/dryfruitbanner.png' className='img-responsive' alt='banner' width={"100%"}/>
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='Dry_Fruits' ?<Dryfruitmap key={item.id}  id ={item.id} img = {item.image} title={item.title} price = {item.price} /> : '')}</div>
        </div>
        </>
    )

}
export default Dryfruit