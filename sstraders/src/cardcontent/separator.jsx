import Riceandatta from "../components/Riceandatta/riceandatta"
import Content from "./cardcontent"
const Separator =()=>{
    return(
        <>
        {Content.map((item)=>item.moduletitle==='riceandatta' ?<Riceandatta key={item.id} img = {item.image} title={item.title} price = {item.price} /> : '')}
        </>

    )
}

export default Separator