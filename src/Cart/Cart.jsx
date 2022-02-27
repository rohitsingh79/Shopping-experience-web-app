import { createContext , useEffect , useState} from "react";
import { useContext } from "react";
import { Cart } from '../Context/Context'

const CartCheckout = () => {  

    const {cart} = useContext(Cart)
    
    useEffect(()=>{
        console.log("CartCheckout");
        console.log("cart item", cart)
    })

      return (
          <div>
              <div>Cart Item</div>
              {
              cart.map((item, index)=>{
                return <p key = {index}>{item}</p>
              })
              }</div>
      );
}

export default CartCheckout
