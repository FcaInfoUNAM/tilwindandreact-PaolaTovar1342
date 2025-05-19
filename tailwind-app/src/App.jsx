
import './App.css'

function App() {

  return (
    <>
    <div className="h-screen bg-orange-500 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white">¡Hola Tailwind CSS!</h1>
      <p className="mt-4 text-white">
        Tailwind CSS es increíblemente poderoso. ¡No puedo esperar para seguir explorándolo!
      </p>
    </div>
    </>
  )
}

export default App

/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/