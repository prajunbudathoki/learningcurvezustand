import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "@/api/FakeApi";
import { Button } from "./ui/button";
import { useCart } from "@/store";

export default function ProductList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchAllProducts,
    });

    const addCart = useCart((state) => state.addCart);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error while loading products</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {data?.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-col justify-between bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col gap-y-2">
                        <h2 className="text-lg font-semibold text-neutral-800">
                            {product.title.slice(0, 10)}...
                        </h2>
                        <p className="text-gray-500 text-sm">
                            ${product.price.toFixed(2)}
                        </p>
                        <Button
                            variant="outline"
                            className="mt-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                            onClick={() =>
                                addCart({
                                    ...product,
                                    price: product.price,
                                    quantity: 1,
                                })
                            }
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}