import { useState,useEffect } from "react"
import Productlist from "./Productlist";
import { ToastContainer, toast } from 'react-toastify';
const Addprodect =(props)=>{
    console.log(props)
    const{id,updateimage,updatetitle,updatemoduletitle,updateprice,updateqty} = props
    console.log(id)
    const [itemname,setItem] = useState("");
    const [modulename,setModule] = useState("");
    const [image,setImage] = useState("");
    const[price,setPrice] = useState();
    const[qty,setQty] = useState();
    if(id){
        setItem(updatetitle)
        setModule(updatemoduletitle)
        setImage(updateimage)
        setPrice(updateprice)
        setQty(updateqty)
    }
    const Itemchanges = (e)=>{
        setItem(e.target.value);
    }
    const Modulechanges = (e)=>{
        setModule(e.target.value);
    }
    const Imagechanges = (e)=>{
        setImage(e.target.value);
    }
    const Pricechanges=(e)=>{
        setPrice(e.target.value);
    }
    const Qtychanges=(e)=>{
        setQty(e.target.value);
    }
    const handlesave =(e)=>{
        e.preventDefault()
        const obj={
            moduletitle:modulename,
            title:itemname,
            price:price,
            qty:qty,
            image:image
        }
        console.log(obj)
        if(obj.title){
            console.log(obj)
            fetch('http://localhost:5000/api/v1/sstraders', {
                method: 'POST',
                headers: { 
                    'Accept': 'application/json ,text/plain ,*/*',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(obj),
              })
                .then((response) => response.json())
                .then((object) => console.log(object))
                .catch((error) => console.error(error));
                toast('Product added Successfully') 
        }
    }
    return(
        <>
        
        <div className="container">
                <h2>Add Products</h2>
                <hr /> 
                <form >
                <div className="form-group">
                    <label>Item Name:</label>
                    <input type="text" value={itemname} id="itemname" className="form-control" onChange={Itemchanges}/>
                </div>
                <div className="form-group">
                    <label>Qty:</label>
                    <input type="text" value={qty} id="itemname" className="form-control" onChange={Qtychanges}/>
                </div>
                <div className="form-group">
                    <label htmlFor="modulename">ModuleName:</label>
                    <input value={modulename} type="text" className="form-control" onChange={Modulechanges}/>
                </div>
                <div className="form-group">
                    <label htmlFor="modulename">Product Photo-Link(google photos):</label>
                    <input type="text" value={image} className="form-control" onChange={Imagechanges}/>
                </div>
                <div className="form-group">
                    <label htmlFor="modulename">Price:</label>
                    <input type="text" value={price} className="form-control" onChange={Pricechanges}/>
                </div>
                <br />
                <button className="btn btn-dark" onClick={(e)=> handlesave(e)}>Add Product</button>
                <ToastContainer />
                </form>
        </div>
        <br /><br />
        <Productlist />
        </>
    );
}
export default Addprodect