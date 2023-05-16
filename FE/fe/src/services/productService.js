import axios from "axios";

export const findAllProduct = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/product`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const updateProduct = async (product) => {
    try {
        await axios.put(`http://localhost:8080/product/${product.id}`, {...product})
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
export const findProductById = async (productId) => {
    try {
        const result = await axios.get(`http://localhost:8080/product/${productId}`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}