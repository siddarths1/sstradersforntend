import Content from "../cardcontent/cardcontent";
import { ToastContainer, toast } from 'react-toastify';
import Addprodect from "./Addprodect";
import Updateproduct from "./Updateproduct";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Productlist = ()=>{
    const navigate = useNavigate()
    
    const handleDelete = (id)=>{
        const filerdList = Content.filter((item,i) => item._id!==id)
        fetch(`http://localhost:5000/api/v1/sstraders/${id}`,{
          method:'DELETE'
        }).then(()=>{
          toast("String Deleted successfully");
       })
       console.log(filerdList);
    }
    // const [item,setitem] = useState("");
    // const [module,setmodule] = useState("");
    // const [img,setimg] = useState("");
    // const[price,setPrice] = useState();

    
    const[fetchcheck,setfetch] = useState(false)
    const [check,setCheck] = useState(false)

    const [upid,setUpid] = useState()
    const [upimage,setUpimage] = useState()
    const [upmodulename,setUpmodulename] = useState()
    const [upprice,setUpprice] = useState()
    const [uptitle,setUptitle] = useState()
    const [upqty,setUpqty] = useState()
    const handleUpdate = (id,image,title,modulename,price,qty)=>{
        setUpid(id)
        setUpimage(image)
        setUpmodulename(modulename)
        setUpprice(price)
        setUptitle(title)
        setUpqty(qty)
        setCheck(!check)
    }
    const Itemchange = (e)=>{
        setUptitle(e.target.value);
    }
    const Modulechange = (e)=>{
        setUpmodulename(e.target.value);
    }
    const Imagechange = (e)=>{
        setUpimage(e.target.value);
    }
    const Pricechange=(e)=>{
        setUpprice(e.target.value);
    }
    const qtychange=(e)=>{
        setUpqty(e.target.value);
    }
    const handleUpdateSave=(e)=>{
        e.preventDefault()
        const obj={
            moduletitle:upmodulename,
            title:uptitle,
            price:upprice,
            qty:upqty,
            image:upimage
        }
        console.log(obj)
        fetch(`http://localhost:5000/api/v1/sstraders/${upid}`,{
          method:'PUT',
          headers:{
            'Accept': 'application/json ,text/plain ,*/*',
            'Content-Type':'application/json'
          },
          body: JSON.stringify(obj)
        }).then(()=>{
            setfetch(!fetchcheck)
          console.log("String Updated successfully");
       })
    }
    return(
        <>
        {!check ?(
        <div className="container">
        <ToastContainer />
            <h3>Products List</h3>
            <hr />
            <table style={{width:'100%'}}>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Module Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Changes</th>
                </tr>
            {Content.map((item)=>(
                <tr>
                <td><img src={item.image} alt="product" width={130} height={130}/></td>
                <td><h4>{item.title}</h4></td>
                <td><h4>{item.moduletitle}</h4></td>
                <td><h4>{item.price}</h4></td>
                <td><h4>{item.qty}</h4></td>
                <td><button className="btn btn-info" onClick={()=>handleUpdate(item._id,item.image,item.title,item.moduletitle,item.price,item.qty)}>Update</button> <button className=" btn btn-danger" onClick={()=> handleDelete(item._id)}>Delete</button></td>
                </tr>
            ))}
            </table>
        </div>
        ):(
            <>
            <div className="container">
            {fetchcheck ? <div  className="alert alert-success"><h5>Product Updated successfully</h5></div> :""}
            <form>
                <div className="form-group">
                    <label>Item Name:</label>
                    <input type="text" value={uptitle} id="itemname" className="form-control" onChange={Itemchange}/>
                </div>
                <div className="form-group">
                    <label>Qty:</label>
                    <input type="text" value={upqty} id="itemname" className="form-control" onChange={qtychange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="modulename">ModuleName:</label>
                    <input value={upmodulename} type="text" className="form-control" onChange={Modulechange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="modulename">Product Photo-Link(google photos):</label>
                    <input type="text" value={upimage} className="form-control" onChange={Imagechange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="modulename">Price:</label>
                    <input type="text" value={upprice} className="form-control" onChange={Pricechange}/>
                </div>
                <br />
                <button className="btn btn-dark" onClick={(e)=> handleUpdateSave(e)} >Update Product</button>
            </form>
            </div>
            
            <button onClick={()=> setCheck(!check)} className="btn btn-dark">BacktoList</button>
            </>
        )}
        </>
    )
}
export default Productlist