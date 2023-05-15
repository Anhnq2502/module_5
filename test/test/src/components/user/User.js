// import {useEffect, useState} from "react";
// import * as userService from "../../services/user/userService";
// import {Link} from "react-router-dom";
//
//
// export function User(){
//     const [users,setUsers] = useState([]);
//     useEffect(()=>{
//         const fetchApi = async()=>{
//             const result =await userService.findAll()
//             setUsers(result)
//             console.log(result[0].address.street)
//         }
//         fetchApi()
//     },[])
//     return(
//         <table className="table">
//             <thead>
//             <tr>
//                 <td>ID</td>
//                 <td>Name</td>
//                 <td>UserName</td>
//                 <td>Email</td>
//                 <td>address</td>
//                 <td className="text-center">Action</td>
//             </tr>
//             </thead>
//             <tbody>
//             {
//                 users.map((user) => (
//                     <tr key={user.id}>
//                         <td>{user.id}</td>
//                         <td>{user.name}</td>
//                         <td>{user.username}</td>
//                         <td>{user.email}</td>
//                         <td>{user.address.street}</td>
//                         <td className="d-flex justify-content-center ">
//                             <Link to={`/edit/${user.id}`}><button type="submit" className="btn btn-primary me-3">Edit</button></Link>
//                             <button type="submit" className="btn btn-danger">Delete</button>
//                         </td>
//                     </tr>
//                 ))
//             }
//             </tbody>
//         </table>
//     )
// }