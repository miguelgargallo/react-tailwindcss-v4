import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 class="text-3xl text-indigo-500 font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
