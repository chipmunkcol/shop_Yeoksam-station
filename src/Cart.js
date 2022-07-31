import { Table } from 'react-bootstrap';

function Cart(){
    return(
        <>
        <h1>카트입니다</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명(옵션)</th>
                <th>판매가</th>
                <th>수량</th>
                </tr>
            </thead>
            <tbody>
                {
                    [1,2].map(()=>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    )
                }
                
            </tbody>
        </Table>
        </>
    );
}

export default Cart;