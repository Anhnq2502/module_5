import axios from "axios";

export const findAllType = async () => {
    try {
        const result = await axios.get("http://localhost:8080/type")
        return result.data
    }catch (e){
        console.log(e)
    }
}