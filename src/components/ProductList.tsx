import { useQuery } from "@tanstack/react-query"
import { fetchAllProducts } from "@/api/FakeApi"
import { Button } from "./ui/button"
import { useCart } from "@/store"

export default function ProductList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchAllProducts
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>error while loading products</div>

    const addCart = useCart((state) => state.addCart)
    const cart = useCart((state) => state.cart)
    
    console.log('cart list: ',cart)

    return (
        <div className="grid grid-cols-4 gap-4">
            {data?.map((product) => (
                <div key={product.id} className="flex flex-col justify-between gap-y-2">
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p className="text-gray-500">${product.price}</p>
                    <Button className="mt-2" onClick={() => addCart({
                        ...product,
                        price: product.price,
                        quantity: 1
                    })}>
                        Add to cart
                    </Button>
                </div>
            ))}
        </div>
    )
}
