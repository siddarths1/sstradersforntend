
import axios from "axios"
var Content = []

    await axios.get("http://localhost:5000/api/v1/sstraders").then((res)=>{
        Content=res.data;
    }).catch((err)=>
    {
        console.log(err);
    })
    const addItem=()=>{
        
    }
    
 
export default Content;