import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/contracts")
        return result.data
    } catch (err) {
        console.log(err)
    }
}
export const save = async (contract) => {
    try {
        await axios.post("http://localhost:8080/contracts", {...contract})
    } catch (err) {
        console.log(err)
    }
}
export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/contracts/${id}`)
    } catch (err) {
        console.log(err)
    }
}
export const update = async (contracts) => {
    try {
        await axios.put(`http://localhost:8080/contracts/${contracts.id}`, {...contracts})
    } catch (err) {
        console.log(err)
    }
}
export const getContract = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/contracts/" + id)
        return result.data
    }catch (err){
        console.log(err)
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/contracts/${id}`)
        return result.data
    }catch (err){
        console.log(err)
    }
}
