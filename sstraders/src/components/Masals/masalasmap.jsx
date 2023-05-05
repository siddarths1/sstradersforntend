// import './homeandkitchencss.css'
import Card from 'react-bootstrap/Card'
import '../../bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Masalasmap =(props)=>{
    const {id,img , title , price} = props
    return(
        <>
        <div className='col-md-3 mt-3'>
        <Card style={{width:"15rem"}}>  
                <Card.Img variant='top'src={img}></Card.Img>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Button variant='primary' onClick={()=>console.log(id)}>AddtoCart</Button>
                </Card.Body>
        </Card>
        </div>
        </>
    )
}
export default Masalasmap