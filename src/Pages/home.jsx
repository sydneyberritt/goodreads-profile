import './Pages.css'
import { Link } from 'react-router-dom'
import Papa from "papaparse";
import { useState } from 'react';


export function Home() {
    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);

    const changeHandler = (event) => {
    // Parsing file data 
    Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
            // Parsed Data in array format
            setParsedData(results.data);
        },
      });
    }
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
      <input type="file" 
      name = "file"
      accept = ".csv"
      onChange={changeHandler}/>
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
