
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Foodmap from "./foodmap"
const Food = ()=>{
    return(
        <>
        <div className="container">
        <br></br>
        <img src='images/noodlesbanner.png' className='img-responsive' alt='banner' width={"100%"}/>
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='Food colours' ?<Foodmap key={item.id}  id ={item.id} img = {item.image} title={item.title} price = {item.price} /> : '')}</div>
        </div>
        </>
    )

}
export default Food