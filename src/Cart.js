import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, removeCount, removeCart } from './store';

function Cart(){

const dispatch = useDispatch()

const state = useSelector((state)=> state )
// console.log(state.cart)

    return(
        <>
        <h1>카트입니다</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th># {state.cart.length}개</th>
                <th>상품명(옵션)</th>
                <th>판매가</th>
                <th>수량</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.cart.map((val, i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{val.title}</td>
                        <td>{val.price}</td>
                        <td><button style={{marginRight:'10px'}} onClick={()=>{
                                dispatch(removeCount(val))
                            }}>-</button>{val.count}<button style={{marginLeft:'10px'}} onClick={()=>{
                                dispatch(addCount(val))
                            }}>+</button>
                        </td>
                        <td style={{width:'100px'}}><Button variant="danger" style={{marginLeft:'0px'}} onClick={()=>{
                                dispatch(removeCart(val))
                        }}>삭제</Button></td>
                    </tr>
                    )
                }
                
            </tbody>
        </Table>
        </>
    );
}

export default Cart;