
import {NavLink, Route, Routes} from "react-router-dom";
import React from "react";
import {ListStudent} from "./components/ListStudent";
import {CreateStudent} from "./components/CreateStudent";

function App() {
  return (
      <>
      <ul>
        <li><NavLink to="/">Danh sách học sinh</NavLink> </li>
        <li><NavLink to="/create">Tạo mới học sinh</NavLink> </li>
      </ul>
      <Routes>
        <Route path='/create' element={<CreateStudent/>}></Route>
        <Route path='/' element={<ListStudent/>}></Route>
      </Routes>
      </>
  );
}

export default App;
