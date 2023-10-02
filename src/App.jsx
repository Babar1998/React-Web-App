import Counter from './Components/Counter/Counter'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Counter/Counter.css'

function App() {
  const [count, setCount] = useState(0)

  return <Counter/>
}

export default App
