import AddtoCart from "./Cart/addtocart"

const Cart =(props)=>{
    console.log(props.id)
    return(
        <>
            <AddtoCart id={props.id} img = {props.img} title={props.title} price={props.price} />
        </>
    )
}
export default Cart