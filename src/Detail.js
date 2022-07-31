import { Routes, Route, Link, useNavigate, Outlet, Nav, useParams } from 'react-router-dom';

function Detail({jsonData1}) {

let params = useParams().id;
console.log(params)



    return(
        <>
        <div style={{display:'flex', justifyContent:'center'}}>
            <div className={'imgD0'+params}></div>
            <div className='img_text'>
                <h1>{jsonData1[params].title}</h1>
                <h2>{jsonData1[params].price}원</h2>
                <h5>{jsonData1[params].content}</h5>
            </div>
        </div>
        <p>{jsonData1[params].detail}</p>
        </>
    );
}

export default Detail;