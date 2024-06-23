import ProductView from './Components/ProductView';
import CartView from './Components/CartView';
import UserLogin from './Components/UserLogin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin/>}></Route>
        <Route path="/product" element={<ProductView hide={false} />}>
         </Route>
         <Route path="/cart" element={<CartView hide={true} />}>
         </Route>
      </Routes>
    </Router>
    //<ProductView/>
   // <div>Hello</div>
  )
}

export default App
