import axios from "axios";
export const findAllStudent = async () => {
    try {
        const result = await axios.get("http://localhost:8080/students")
        return result.data
    }catch (err){
        console.log(err)
    }
}