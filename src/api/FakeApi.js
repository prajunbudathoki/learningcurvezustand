import axios from "axios";

const product_url = 'https://fakestoreapi.com/'

const fetchAllProducts = async () => {
    try {
        const response = await axios.get(`${product_url}products`)
        console.log(response)
    } catch(err) {
        console.log(err)
    }
}

export default fetchAllProducts