import {useEffect, useState} from "react";
import * as bookService from "../services/bookService";
import "./BookManagement.css";
import {Link} from "react-router-dom";



export function BookManagement() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findAll()
            setBooks(result)
        }
        fetchApi()
    }, [])
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Tittle</th>
                        <th>Quantity</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td className="d-flex justify-content-center">
                                <Link to={`/edit/${book.id}`}><button type="submit" className="btn btn-primary me-3">Edit</button></Link>
                                <button type="submit" className="btn btn-danger" onClick={()=> {

                                }}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}