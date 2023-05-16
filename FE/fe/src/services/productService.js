import axios from "axios";

export const findAllProduct = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/product`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const updateProduct = async (products) => {
    try {
        await axios.put(`http://localhost:8080/products/${products.id}`, {...products})
    } catch (e) {
        console.log(e)
    }
}
export const getProduct = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/product/${id}`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const findProductById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/products/${id}`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}