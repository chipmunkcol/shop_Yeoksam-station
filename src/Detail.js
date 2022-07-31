import { Routes, Route, Link, useNavigate, Outlet, Nav, useParams, Navigate } from 'react-router-dom';
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'
import { useState } from 'react';


function Detail({jsonData1}) {

let params = useParams().id;
// console.log(params)

let [number,setNumber] = useState(0);
const navigate = useNavigate();


    return(
        <>
        <div style={{display:'flex', justifyContent:'center'}}>
            <div className={'imgD0'+params}></div>
            <div className='img_text'>
                <h1>{jsonData1[params].title}</h1>
                <h2>{jsonData1[params].price}원</h2>
                <h5>{jsonData1[params].content}</h5>
                
                <select style={{marginTop:'20px', textAlign:'center'}} name='number' onChange={(e)=> {setNumber(e.target.value)}}>
                    <option value='none'>= 수량 =</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
                 
                <Button style={{marginTop:'20px'}} variant="warning" onClick={()=>{
                  navigate('/cart')  
                }}>주문하기</Button>
            </div>
        </div>
        <p>{jsonData1[params].detail}</p>
        </>
    );
}

export default Detail;