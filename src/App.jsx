import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Goodreads Profile</h1>
      <div className="card">
        <button>
          Export Goodreads Data 
        </button>
      </div>
      <p className="read-the-docs">
        Upload your Goodreads CSV here
      </p>
      <input type="file" />
    </>
  )
}

export default App
