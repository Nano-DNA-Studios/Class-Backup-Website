import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./MainCard.tsx"
import MainCard from './MainCard.tsx'
import documentLogo from './assets/document.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>
        Nano Technology Engineering Class Backup
      </h1>
      <h2>
        Class Notes and Resources Hosted by MrDNAlex
      </h2>
      
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <p>
          Hello from Vite and React in HTML
        </p>
      </div> */}

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <MainCard />
      </div>
    </>
  )
}

export default App
