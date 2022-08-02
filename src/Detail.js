import { Routes, Route, Link, useNavigate, Outlet, Nav, useParams, Navigate } from 'react-router-dom';
import { Button, Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, addCount } from './store';


function Detail() {

const dispatch = useDispatch()

let [state] = useState(useSelector((state)=> state )); // useState() 안에 redux 에서 호출해온 json을 넣어줬다.
// console.log(state)

let params = useParams().id;
// console.log(params)

let [number,setNumber] = useState(0);
// console.log(number)

const navigate = useNavigate();
 
useEffect(()=>{

  // localStorage.setItem('watched', JSON.stringify([ ]))
  const 꺼낸거 = JSON.parse(localStorage.getItem('watched'))

  if (꺼낸거.indexOf(state.data[params].id) === -1) {
    꺼낸거.push(state.data[params].id)
    localStorage.setItem('watched', JSON.stringify( 꺼낸거 ))
  };
  
}, [])

    return(
        <>
        <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
            <div className={'imgD0'+params}></div>
            <div className='img_text'>
                <h1>{state.data[params].title}</h1>
                <h2>{state.data[params].price}원</h2>
                <h5>{state.data[params].content}</h5>
                
                <select style={{marginTop:'20px', textAlign:'center'}} defaultValue='none' name='number' onChange={(e)=> {  /*select value값 문자인거 까먹지말자 */
                      setNumber(Number(e.target.value))}}>  
                    <option value='none' disabled>= 수량 =</option>
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
                 
                <Button style={{marginTop:'20px'}} variant="warning" onClick={()=>{ //select 초기값이 0이어서 0일때 alert 설정
                  if(number === 0){                       
                    alert('수량을 선택해주세요!')
                  } else {
                    let copy = {...state.data[params], count: number};              //사용하려는 자료가 '객체'인 경우 전개연산을 잘 이용하자!
                    dispatch(addCart(copy))

                    // let copy2 = {...state};
                    // copy2.data[params].count = number
                    // dispatch(addCart(copy2))   //이거 왜 안되는지 물어보자!

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