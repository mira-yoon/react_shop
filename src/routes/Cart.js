import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, plusAge } from './../store/userSlice';


function Cart(){

  let state = useSelector((state)=>{return state});

  let disPatch = useDispatch();

  return (
    <div>
      {state.user.name}{state.user.age}의 장바구니
      <button onClick={()=>{
        disPatch(plusAge(100));
      }}>버튼</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map(function(elem, i){
              return (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <td>
                    <button onClick={()=>{
                      disPatch(changeName())
                    }}>+</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      
    </div>
  )
}

export default Cart;