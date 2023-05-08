import { useEffect, useState } from "react";
import axios from "axios";
export function TodoList() {
    const [job, setJob] = useState("");
    const [flag, setFlag] = useState(false);
    const [job1, setJob1] = useState([]);
    const Url = "http://localhost:3000/todos";
    function handleSubmitJob() {
        axios
            .post(Url, { title: job })
            .then((res) => {
                console.log(res);
                setFlag(!flag);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        axios.get(Url).then((res) => setJob1(res.data));
        console.log(job1);
    }, [flag]);
    return (
        <>
            <h1>To Do list</h1>
            <input
                type="text"
                placeholder="Nhập công việc cần làm"
                value={job}
                onChange={(e) => {
                    setJob(e.target.value);
                }}
            />
            <button onClick={handleSubmitJob}>Submit</button>
            <ul>
                {job1.map((job) => (
                    <li key={job.id}>{job.title}</li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;