import { Col, Row, Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom';
import { useEffect, useState, useParams } from 'react';
import { useSelector } from 'react-redux';


function Main(){

useEffect(()=>{
  if(localStorage.getItem('watched') === null) {
    localStorage.setItem('watched', JSON.stringify( [] ))
  }
  if(localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify( [] ))
  }
  
  setTimeout(() => {
    setEnd('end')
  }, 100);
}, [])

// let [watched, setWatched] = useState([])

const navigate = useNavigate();

const state = useSelector((state)=> state)
// console.log(state.data);

let [end, setEnd] = useState('')

let 본거 = JSON.parse(localStorage.getItem('watched'))
let 최근본거 = 본거[본거.length-1]

const a = state.data.findIndex((val)=>val.id === 최근본거)

console.log(a)

    return(
      <div className={'start '+end}>
      <div className='containerMain'>

        <div className='flexMain1'>
          <h1>스위스역삼역토마토 홈쇼핑</h1>
          <img style={{width:'40%', borderRadius:'3%'}} src={require('./img/80179016571916020.jpg')} />
          <p>어머, 이건 사야해!</p>
        </div>

        <div className='flexMain2'>
          <div style={{backgroundColor:'hsl(196, 65%, 35%)', height:'25px'}}></div>
          <pre style={{marginTop:'10px', color:'hsl(196, 65%, 35%)', fontWeight:'bold'}}>최근 본 상품</pre>
          <div className={'imgM0'+a} onClick={()=>{
            navigate('/detail/'+a)
          }}></div>
          
        
        </div>
      </div>
  
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
  
      </div>
    );
  }

  export default Main;