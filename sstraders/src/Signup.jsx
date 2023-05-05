import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import  Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
// import "./styles/signup.css";
import { useState } from 'react'

import { Func } from './UserValidation'


export default function SignUp() {

     const Context = Func();

     const[userName,setUserName] = useState("")
     const[email,setEmail] = useState("")
     const[password,setPassword]= useState("")
     
     const move = useNavigate();

  const SendingData=(event)=>{
        event.preventDefault();

        if(Context.details)
        {
          if(Context.details.find(obj=>obj.email===email))
          {
               console.log("email exist")
          }
          else
          {
               Context.Store(email,password)
     
          }
         
        }
        else{
          Context.Store(email,password);
          console.log(Context.details)
          
        }

      move("/Login")  
  }

   

  const LoginNavigate=()=>{
     move('/Login')
  }

  return (
    <div className='align'>
     <div>
     <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
          <Container fluid className='mt-4'>
          <Row >
               <Col xs={6}>
                    <Card  className='shadow' >
                         <Card.Header style={{backgroundColor:'bisque'}}  >
                         <h2>Register</h2>
                         <p>Already Have an Account?</p>
                         <div><Button onClick={LoginNavigate} variant='danger'>LogIn</Button></div>
                         </Card.Header>

                         <Card.Body>
                              <Form onSubmit={SendingData} > 
                              <Form.Group className='mb-3'>
                                   <Form.Control type='text' placeholder='UserName'  onChange={(e)=>setUserName(e.target.value)} value={userName} ></Form.Control>
                              </Form.Group>
                              <Form.Group className='mb-3'>
                                   <Form.Control type='email' placeholder='Email'  onChange={(e)=>setEmail(e.target.value)} value={email} ></Form.Control>
                              </Form.Group>
                              <Form.Group className='mb-3'>
                                   <Form.Control type='Password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}></Form.Control>
                              </Form.Group>
                              <Form.Group className='mb-3'>
                                   <Button type='submit' variant='success' >REGISTER</Button>
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
