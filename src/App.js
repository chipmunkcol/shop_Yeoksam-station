/*eslint-disable */
import './App.css';
import { Col, Row, Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jsonData from './data';
import Main from './Main';
import Detail from './Detail';
import Cart from './Cart';

function App() {
  
const navigate = useNavigate()

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
  
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Coffee</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
      
           <Route path='/' element={<Main />} />
           <Route path={'/detail/:id'} element={<Detail />} />
           <Route path='/cart' element={<Cart/>} />

    </Routes>
      
  
    </div>
  );
}




export default App;
