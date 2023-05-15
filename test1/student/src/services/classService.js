import axios from "axios";

export const findAllClass = async () => {
    try {
        const result = await axios.get("http://localhost:8080/classes")
        return result.data
    }catch (err){
        console.log(err)
    }
}