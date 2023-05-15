import axios from "axios";

export const findAllStudent = async () => {
    try {
        const result = await axios.get("http://localhost:8080/students")
        return result.data
    }catch (err){
        console.log(err)
    }
}
export const save = async (students) => {
    try {
        await axios.post(`http://localhost:8080/students`,{...students})
    }catch (err){
        console.log(err)
    }
}
export const edit = async (students) => {
    try {
        await axios.put(`http://localhost:8080/students/${students.id}`,students)
    }catch (err){
        console.log(err)
    }
}
export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/students/${id}`)
    }catch (err){
        console.log(err)
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/students/${id}`)
        return result.data
    }catch (err){
        console.log(err)
    }
}