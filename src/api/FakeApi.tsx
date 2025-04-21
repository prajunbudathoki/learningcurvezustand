import axios from "axios";

const product_url = 'https://fakestoreapi.com/'
type Product = {
    id: number
    title: string
    price: number
    category: string
    image: string
}

export const fetchAllProducts = async () => {
    try {
        const response = await axios.get<Product[]>(`${product_url}products`)
        return response.data
    } catch(err) {
        console.log(err)
    }
}
