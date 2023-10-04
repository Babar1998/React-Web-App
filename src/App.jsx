import Counter from './Components/Counter/Counter'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Counter/Counter.css'

function App() {
  return <div>
    <Counter name = "Babar's"/>
    <Counter name = "Rizwan's"/>
    <Counter name = "Harris's"/>
    <Counter name = "Rauf's"/>
  </div>;
  
}
export default App
