import './Pages.css'
import { Link } from 'react-router-dom'
export function Home() {

  return (
    <>
      <div>
      </div>
      <h1>Goodreads Profile</h1>
      <div className="card">
        <a href = "https://www.goodreads.com/review/import">
        <button>
          Export Goodreads Data 
        </button>
        </a>
      </div>
      <p className="read-the-docs">
        Upload your Goodreads CSV here
      </p>
      <input type="file" />
      <div className="card">
      <Link to="/profile">
        <button>
            View your Goodreads Profile
        </button>
      </Link>
      </div>
    </>
  )
}
