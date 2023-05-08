import './App.css';
import {BookManagement} from "./components/BookManagement";
import {NavLink, Route, Routes} from "react-router-dom";
import {BookCreate} from "./components/BookCreate";
import {ToastContainer} from "react-toastify";
import {BookEdit} from "./components/BookEdit";

function App() {
    return (
        <>
            <NavLink to='/'>List</NavLink>
            <NavLink to='/create' className="ms-3">Create book</NavLink>
            <Routes>
                <Route path="/edit/:id" element={<BookEdit />}/>
                <Route path="/create" element={<BookCreate/>}/>
                <Route path='/' element={<BookManagement/>}/>
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
