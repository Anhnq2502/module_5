import axios from "axios";

export const findAll = async () =>{
    try {
        const result = await axios.get('http://localhost:8080/books')
        return result.data
    }catch (error){
        console.log(error)
    }
}
export const remove = async (id) =>{
    try {
        await axios.delete('http://localhost:8080/books',id)
    }catch (error){
        console.log(error)
    }
}
export const edit = async () => {
    try {
        await axios.put('http://localhost:8080/books')
    }catch (error){
        console.log(error)
    }
}
export const save = async (books) => {
    try {
        await axios.post('http://localhost:8080/books',books)
    }catch (error){
        console.log(error)
    }
}