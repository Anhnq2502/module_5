import axios from "axios";

export const findAll = async () =>{
    try {
        const result = await axios.get('http://localhost:3000/books')
        return result.data
    }catch (error){
        console.log(error)
    }
}
export const remove = async () =>{
    try {
        await axios.delete('http://localhost:3000/books')
    }catch (error){
        console.log(error)
    }
}
export const edit = async () => {
    try {
        await axios.put('http://localhost:3000/books')
    }catch (error){
        console.log(error)
    }
}
export const save = async () => {
    try {
        await axios.post('http://localhost:3000/books')
    }catch (error){
        console.log(error)
    }
}