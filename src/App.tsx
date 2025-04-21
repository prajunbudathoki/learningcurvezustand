import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import './App.css'
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <div className="w-[1280px] mx-auto py-4">
          <h1 className="text-4xl">Product List:</h1>
          <div className="flex">
            <div className="w-[80%]">
              <ProductList />
            </div>
            <Cart />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
