// import './homeandkitchencss.css'
import Card from 'react-bootstrap/Card'
import '../../bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cart from '../../Cart'
import axios from 'axios'
const Bevaragesmap =(props)=>{
    const {id,img , title , price,qty} = props
    const addtocart=(id,img,title,price,qty)=>
    {
        axios.put("http://localhost:5000/addtocart",{"email":localStorage.getItem("email"),"items":{ "productid":id,"need":1,"image":img,"title":title,"price":price,"qty":qty}})
        .then(resp=>
            {
                console.log(
                    resp.data)
            })
            .catch(error=>
                {
                    console.log(error)
                })
    }
    return(
        <>
        <div className='col-md-3 mt-3'>
        <Card style={{width:"15rem"}}>  
                <Card.Img variant='top'src={img}></Card.Img>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text><pre>{qty } - Rs: {price}</pre></Card.Text>
                    <Button variant='primary' onClick={()=>addtocart(id,img,title,price,qty)}>AddtoCart</Button>
                </Card.Body>
        </Card>
        </div>
        </>
    )
}
export default Bevaragesmap