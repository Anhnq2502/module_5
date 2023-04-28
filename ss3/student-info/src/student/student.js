import React, {Component} from "react";

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    name: 'Nguyễn Quốc Anh',
                    age: 22,
                    address: 'Quảng Trị'
                },
                {
                    id: 2,
                    name: 'Lê Văn Chính',
                    age: 20,
                    address: 'Quảng Bình'
                },
                {
                    id: 3,
                    name: 'Nguyễn Văn Minh',
                    age: 24,
                    address: 'Nghệ An'
                },
                {
                    id: 4,
                    name: 'Nguyễn Lê Văn Khải',
                    age: 24,
                    address: 'Đà Nẵng'
                }
            ],
        }
    }

    renderStudentData() {
        return this.state.students.map((student, index) => {
            const {id, name, age, address} = student
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{address}</td>
                </tr>
            )
        })
    }
    renderStudentHeader(){
        const header = Object.keys(this.state.students[0])
        return header.map((key,index) => <th key={index}>{key.toUpperCase()}</th>)
    }
    render() {
        return(
            <table>
                <tbody>
                <tr>
                    {this.renderStudentHeader()}
                </tr>
                {this.renderStudentData()}
                </tbody>
            </table>
        )
    }
}
export default Student