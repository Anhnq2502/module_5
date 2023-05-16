import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import {ListProduct} from "./components/ListProduct";
import {EditProduct} from "./components/EditProduct";

function App() {
  return (
      <>
        <ul>
          <li><NavLink to='/'>List Product</NavLink></li>
        </ul>
        <Routes>
          <Route path='/' element={<ListProduct/>}></Route>
          <Route path='edit/:id' element={<EditProduct/>}></Route>
        </Routes>
      </>
  );
}

export default App;
