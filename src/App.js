/*eslint-disable */
import './App.css';
import { Col, Row, Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jsonData from './data';
import Detail from './Detail';

function App() {
  
let[jsonData1] = useState(jsonData)
console.log(jsonData1)

useEffect(()=>{
  
},[]) 

function json() {
   axios.get('')
   .then((response)=>{
   console.log(response.data)
   })
  .catch(()=>{
   alert('ajax 데이터 잘못된거같은디?');
 })
}


  return (
    <div className="App">
     <h1>Hello, react</h1>
  <BrowserRouter>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Coffee</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/cart'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
      
           <Route path='/' element={<Main jsonData1={jsonData1}/>} />

           <Route path={'/detail/:id'} element={<Detail jsonData1={jsonData1}/>} />

           <Route path='/cart' element={<div>카트입니다</div>} />

    </Routes>
      
  </BrowserRouter>
    </div>
  );
}


function Main({jsonData1}){

  const navigate = useNavigate();

  return(
    <>

    <h1>기러기역삼역토마토 홈쇼핑</h1>
    <img style={{width:'40%'}} src={require('./img/80179016571916020.jpg')} />
    <p>어머, 이건 사야해!</p>


    <Container> 
      <Row md={3}>
        {
          jsonData1.map((val,i)=>
            <Col key={i} style={{display:"flex"}} onClick={()=>{
              navigate('/detail/'+i)
            }}>
              <div className={'img0'+i}></div>
              <div className='img_text'>
              <h4>{val.title}</h4>
              <h6>{val.price}원</h6>
              <p>{val.content}</p>
              </div>
            </Col>
          )
        }
        
      </Row>
    </Container>

    </>
  );
}

export default App;
