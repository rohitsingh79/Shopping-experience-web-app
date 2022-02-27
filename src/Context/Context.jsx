import { createContext , useEffect , useState , useReducer} from "react";
import faker from "faker";
import CartReducer from "../ContextReducers/ContextReducers";

export const Cart = createContext({});

const Context = ({children}) => {

    const products = [...Array(5)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
      })); 

    const initialState = []
    
    // const [cart, setCart] = useState([]);
    const [state , dispatch] = useReducer(CartReducer , initialState)

    // useEffect(()=>{
    //   console.log(`cart value in the context: ${cart}`)
    //   // console.log(`cart : ${cart}`)
    // })
  
      return (
        <Cart.Provider value = {{products:products , cart:state , dispatch}}>
          {children}
        </Cart.Provider>
      );
}

export default Context
