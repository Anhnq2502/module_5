import axios from "axios";

export const findAllType = async () => {
    try {
        const result = await axios.get("http://localhost:8080/types")
        return result.data
    }catch (err){
        console.log(err)
    }
}