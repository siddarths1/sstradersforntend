
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Kitchenmap from "./kitchenmap"
const Kitchen = ()=>{
    return(
        <>
        <div className="container">

        <br></br>
        <img src='images/sugarsbanner.png' className='img-responsive' alt='banner' width={"100%"}/>
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='sugars' ?<Kitchenmap key={item.id}  id ={item.id} img = {item.image} title={item.title} price = {item.price} /> : '')}</div>
        </div>
        </>
    )

}
export default Kitchen