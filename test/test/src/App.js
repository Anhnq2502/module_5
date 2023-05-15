import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import {Contract} from "./components/contract/Contract";
import {CreateContract} from "./components/contract/CreateContract";
import {EditContract} from "./components/contract/EditContract";


function App() {
    return (
        <>
            <ul>
                <li><NavLink to='/'>List</NavLink></li>
                <li><NavLink to='/create'>Create contract</NavLink></li>
            </ul>
            <Routes>
                <Route path="/edit/:id" element={<EditContract/>}/>
                <Route path="/create" element={<CreateContract/>}/>
                <Route path='/' element={<Contract/>}/>
            </Routes>
        </>
    );
}

export default App;
