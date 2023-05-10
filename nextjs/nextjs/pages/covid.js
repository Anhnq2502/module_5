import axios from "axios";
import Link from "next/link";

export default function Covid({users}) {
    return (
        <>
            <h1 className="text-center">List</h1>
            <Link href="http://localhost:3000/create">Create</Link>
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>User name</th>
                <th>Email</th>
                <th>Address</th>
                <th className="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street}</td>
                        <td className="d-flex justify-content-center">
                            <a href="http://localhost:3000/edit"><button type="submit" className="btn btn-primary me-3">Edit</button></a>
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </>
    )
}
export const getStaticProps = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return {
        props: {
            users: res.data
        }
    }
}

