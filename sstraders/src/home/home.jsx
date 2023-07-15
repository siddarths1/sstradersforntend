import React, { useEffect,useState } from "react";
import Corosoul from "./carosole";
import { Multicarosoul } from "./multicarosole";
import Displayusename from "./Displayusername";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../../Footer";
export default function Home(){
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
    console.log('Hello')
    return(
        <div>
            {loading?
            <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"black"}}>
            {/* <h5 style={{color:"white",textAlign:"center",fontFamily:"monospace"}}>Welcome to SS Traders</h5> */}
            <img src="./images/loading.gif" alt="loading" width={650} height={650}/>
            {/* <ClipLoader
                color="yellow"
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
                text="SS traders"
            /> */}
            </div>:
            <div>
            <Displayusename />
            <Corosoul />
            <Multicarosoul />
            <Footer />
            </div>}
        </div>
    );
}