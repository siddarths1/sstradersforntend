import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Card from 'react-bootstrap/Card'
// import LoremIpsum from 'react-lorem-ipsum'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import "./styles/login.css";
import { Func } from './UserValidation';

export default function Login() {

  const[lemail,setlemail] = useState("");
  const[lpassword,setlpassword] = useState("");


  const Context = Func();
  const move = useNavigate();

  const SignUpNavigate=()=>{
    move("/SignUp")
 }
 
 const LoginNavigate =()=>{
   move("/Home")
 }



  const GettingData =(event)=>{
    event.preventDefault();
    
    const index = Context.details.findIndex(obj=>obj.email===lemail)
    if(index===-1){alert("singup again or check your credentials")}
    else
    {
      Context.details[index].password===lpassword?move("/"):alert("password incorrect")
    }
    
  }
  


  return (
    <div className='align'>
      <div>
        {/* <marquee direction="right" loop="1"><img src='images/sstrader.png' alt='pic' width={120} height={120}/></marquee> */}
      <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
        <Container fluid className='mt-3' >
            <Row>
              <Col  xs={6}>

                  <Card className='shadow'> 

                  <Card.Header  className='p-3' style={{backgroundColor:'lightblue'}}>
                      <h2>LOGIN</h2>  
                      <p>NEW TO SS TRADERS?</p>
                      <div><Button onClick={SignUpNavigate} variant="danger">SignUp</Button></div>
                  </Card.Header> 
                  
                  <Card.Body>
                        <Form onSubmit={GettingData} >
                              <Form.Group className='mb-3'>
                                <Form.Control type='email' placeholder='Email' onChange={(e)=>(setlemail(e.target.value))} value={lemail} ></Form.Control>
                              </Form.Group>
                              <Form.Group className='mb-3'>
                                <Form.Control type='password' placeholder='Password' onChange={(e)=>(setlpassword(e.target.value))} value={lpassword} ></Form.Control>
                              </Form.Group>
                              <Form.Group className='mb-2'> 
                                <Button variant='success' type='submit'>LogIn</Button>
                              </Form.Group>
                        </Form>
                  </Card.Body>

                </Card>

              </Col>          
            </Row>
                  
        </Container>
                
      </ThemeProvider>
      
      </div>
    </div>
  )
}
