// import './homeandkitchencss.css'
import Card from 'react-bootstrap/Card'
import '../../bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cart from '../../Cart'
const Bevaragesmap =(props)=>{
    const {item,handlechange} = props
    const {id,image , title , price} = item
    return(
        <>
        <div className='col-md-3 mt-3'>
        <Card style={{width:"15rem"}}>  
                <Card.Img variant='top'src={image}></Card.Img>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Button variant='primary' onClick={()=>handlechange(item)}>AddtoCart</Button>
                </Card.Body>
        </Card>
        </div>
        </>
    )
}
export default Bevaragesmap