import Card from 'react-bootstrap/Card'
import '../../bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RiShoppingCart2Fill } from "react-icons/ri";
import '../../overallstyle.css'
const Riceandatta =(props)=>{
    const {id,img , title , price} = props
    return(
        <>
        <div className='col-md-3 mt-3'>
            <Card className='card' style={{width:"15rem"}}>  
                    <Card.Img variant='top'src={img} width={250} height={250}></Card.Img>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Button variant='primary' onClick={()=>console.log(id)}>AddtoCart <RiShoppingCart2Fill /></Button>
                    </Card.Body>
            </Card>
        </div>
        </>
    )
}
export default Riceandatta