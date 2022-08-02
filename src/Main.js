import { Col, Row, Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom';
import { useEffect, useState, useParams } from 'react';
import { useSelector } from 'react-redux';


function Main(){

useEffect(()=>{
  if(localStorage.getItem('watched') === null) {
    localStorage.setItem('watched', JSON.stringify( [] ))
  }

}, [])

// let [watched, setWatched] = useState([])

const navigate = useNavigate();

const state = useSelector((state)=> state)
// console.log(state.data);
  
    return(
      <>
  
      <h1>스위스역삼역토마토 홈쇼핑</h1>
      <img style={{width:'40%', borderRadius:'200px'}} src={require('./img/80179016571916020.jpg')} />
      <p>어머, 이건 사야해!</p>
  
  
      <Container> 
        <Row md={3}>
          {
            state.data.map((val,i)=>
              <Col key={i} style={{display:"flex"}} onClick={()=>{
                // let copy = [...watched]
                // copy.push(val)
                // setWatched(copy)
                // localStorage.setItem('watched',JSON.stringify( watched ))

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

  export default Main;