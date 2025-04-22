import { useCart } from "@/store";
import { useShallow } from "zustand/shallow";

export default function Cart() {
    const { count, addCart, cart, removeCart } = useCart(
        useShallow((state) => ({
            count: state.count,
            cart: state.cart,
            addCart: state.addCart,
            removeCart: state.removeCart,
        }))
    );
    const totalItems = count;
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="h-fit w-[25%] bg-white shadow-lg rounded-lg p-4 flex flex-col gap-y-4">
            <h3 className="text-lg font-bold text-neutral-900 border-b border-neutral-300 pb-2">
                Your Cart
            </h3>
            <ul className="flex flex-col gap-y-4">
                {cart.map((item) => (
                    <li
                        className="flex items-center justify-between bg-neutral-100 p-3 rounded-md shadow-sm"
                        key={item.id}
                    >
                        <div className="flex items-center gap-x-3">
                            <img
                                src={item.image || "/placeholder.png"}
                                alt={item.title}
                                className="w-12 h-12 object-cover rounded-md"
                            />
                            <div>
                                <p className="text-sm font-medium text-neutral-800">
                                    {item.title.slice(0, 5)}...
                                </p>
                                <p className="text-xs text-neutral-500">
                                    ${item.price.toFixed(2)} x {item.quantity}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <button
                                onClick={() => removeCart(item.id)}
                                className="px-2 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                            >
                                -
                            </button>
                            <p className="text-sm font-medium text-neutral-800">
                                {item.quantity}
                            </p>
                            <button
                                onClick={() => addCart(item)}
                                className="px-2 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
                            >
                                +
                            </button>
                        </div>
                        <p className="text-sm font-semibold text-neutral-900">
                            ${item.price * item.quantity}
                        </p>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-y-2 border-t border-neutral-300 pt-4">
                <div className="flex justify-between text-sm font-medium text-neutral-800">
                    <p>Total Items:</p>
                    <p>{totalItems}</p>
                </div>
                <div className="flex justify-between text-sm font-medium text-neutral-800">
                    <p>Total Price:</p>
                    <p>${totalPrice.toFixed(2)}</p>
                </div>
                <button className="w-full mt-2 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                    Checkout
                </button>
            </div>
        </div>
    );
}