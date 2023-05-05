import HomeandKitchenmap from "./homeandkitchenmap"
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
const HomeandKitchen = ()=>{
    return(
        <>
        <div className="grid">
        <br></br>
        <div className="row container">{Content.map((item)=>item.moduletitle==='homeandkitchen' ?<HomeandKitchenmap key={item.id}  id ={item.id} img = {item.image} title={item.title} price = {item.price} /> : '')}</div>
        </div>
        </>
    )

}
export default HomeandKitchen