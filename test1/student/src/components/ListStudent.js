import {useEffect, useState} from "react";
import * as studentService from "../services/studentService";
import * as classService from "../services/classService";


export function ListStudent() {
    const [students, setStudents] = useState([])
    const [studentList, setStudentList] = useState([])
    const [classes, setClasses] = useState([])
    useEffect(() => {
        const listStudent = async () => {
            const students = await studentService.findAllStudent()
            setStudentList(students)
            console.log(students)
        }
        listStudent()
    }, [students])
    useEffect(() => {
        const listClass = async () => {
            const classes = await classService.findAllClass()
            setClasses(classes)
            console.log(classes)
        }
        listClass()
    }, [])
    const handleDelete = async () => {
        await studentService.remove(students.id)
        const result = await studentService.findAllStudent();
        setStudents(result)
        alert("Xoá " + students.name + " thành công")
    }
    const getData = async (id) => {
        const data = await studentService.findById(id);
        setStudents(data)
    }
    const search = async () => {
        const
    }
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <td>STT</td>
                        <td>Tên</td>
                        <td>Tuổi</td>
                        <td>Lớp</td>
                        <td className="text-center">Tác vụ</td>
                    </tr>
                    </thead>
                    {studentList.length === 0 ? (
                        <tbody>
                        <tr>
                            <td>Không có dữ liệu</td>
                        </tr>
                        </tbody>
                    ) : (studentList.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{(classes.find((classes) => classes.id === student.class)?.className)}</td>
                            <td className="d-flex justify-content-center">
                                <button type="submit" className="me-3" style={{background: 'blue'}}>Sửa</button>
                                <button type="submit" style={{background:'red'}} data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => getData(student.id)}
                                >Delete
                                </button>
                            </td>
                        </tr>
                    )))}
                </table>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                        </div>
                        <div className="modal-body">
                            <span>Bạn có muốn xóa</span> <span style={{color: 'red'}}>{students?.name}?</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Cancel
                            </button>
                            <button onClick={() => handleDelete()} type="button" className="btn btn-primary"
                                    data-bs-dismiss="modal">OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}