import {useEffect, useState} from "react";
import * as studentService from "../services/studentService";
import * as classService from "../services/classService";

export function ListStudent() {
    const [students, setStudents] = useState([])
    const [studentList, setStudentList] = useState([])
    const [classes, setClasses] = useState([])

    useEffect(() => {
        const list = async () => {
            const students = await studentService.findAllStudent()
            setStudentList(students)
        }
        list()
    },[students])
    useEffect(() => {
        const listClass = async () => {
            const classes = await classService.findAllClass()
            setClasses(classes)
        }
        listClass()
    },[classes])
    return(
        <>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr style={{background: "black", color: "white"}}>
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
                    ):(studentList.map((student,index) => (
                        <tr key={index}>
                            <td>{index +1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{classes.find((classes) => classes.id == student.class)?.className}</td>
                            <td>
                                <button type="submit" className="btn btn-primary me-3">Sửa</button>
                                <button type="submit" className="btn btn-danger">Xoá</button>
                            </td>
                        </tr>
                    )))}
                </table>
            </div>
        </>
    )
}