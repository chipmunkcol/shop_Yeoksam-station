import { Routes, Route, Link, useNavigate, Outlet, Nav, useParams, Navigate } from 'react-router-dom';
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, addCount } from './store';


function Detail() {

const dispatch = useDispatch()


let [state, setState] = useState(useSelector((state)=> state ));
console.log(state)

let params = useParams().id;
// console.log(params)

let [number,setNumber] = useState(0);
console.log(number)

const navigate = useNavigate();


    return(
        <>
        <div style={{display:'flex', justifyContent:'center'}}>
            <div className={'imgD0'+params}></div>
            <div className='img_text'>
                <h1>{state.data[params].title}</h1>
                <h2>{state.data[params].price}원</h2>
                <h5>{state.data[params].content}</h5>
                
                <select style={{marginTop:'20px', textAlign:'center'}} name='number' onChange={(e)=> {setNumber(Number(e.target.value))}}>
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
                  if(number === 0){
                    alert('수량을 선택해주세요!')
                  } else {
                    let copy = {...state.data[params], count: number};
                    console.log(copy)
                    dispatch(addCart(copy))
                    navigate('/cart')  
                  }
                }}>주문하기</Button>
            </div>
        </div>
        <p>{state.data[params].detail}</p>
        </>
    );
}

export default Detail;