import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import './App.css'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
        
    </QueryClientProvider>
  )
}

export default App
