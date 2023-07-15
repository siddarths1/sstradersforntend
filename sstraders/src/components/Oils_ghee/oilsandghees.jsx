
import Content from "../../cardcontent/cardcontent"
import '../../bootstrap.min.css'
import Oilsandgheesmap from "./oilsandgheesmap"
import { useState ,useEffect} from "react"
import Footer from "../../../Footer"
const Oilsandghees = ()=>{
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
    return(
        <>
        <div>
            {loading?
            <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"black"}}>
            {/* <h5 style={{color:"white",textAlign:"center",fontFamily:"monospace"}}>Welcome to SS Traders</h5> */}
                <img src="./images/loading.gif" alt="loading" width={650} height={650}/>
            </div>:<>
            <div className="container">
                <br></br>
                <div>
                <img src='images/oilsgheebanner.png' className='img-responsive' alt='banner' width={"100%"}/>
                </div>
                <br></br>
                <div className="row container">{Content.map((item)=>item.moduletitle==='Oils_ghee' ?<Oilsandgheesmap key={item._id}  id ={item._id} img = {item.image} title={item.title} price = {item.price} qty={item.qty}/> : '')}</div>
            </div>
            </>
            }
            <br /><br />
        </div>
        <Footer/>
        </>
    )

}
export default Oilsandghees