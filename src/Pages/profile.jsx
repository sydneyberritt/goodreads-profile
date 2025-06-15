import './Pages.css'
import { Link } from 'react-router-dom'
export function Profile() {

  return (
    <>
      <h1>Profile Page</h1>
      <Link to="/highlights">Highlights</Link>
      <Link to="/recent">Recent</Link>
      <Link to="/wrapped">Wrapped</Link>
    </>
  )
}
