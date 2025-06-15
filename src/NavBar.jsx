import './NavBar.css'
import { Link } from 'react-router-dom'
export function NavBar() {

  return (
    <>
    <nav className="navbar">
    <ul>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/highlights">Highlights</Link></li>
      <li><Link to="/recent">Recent</Link></li>
      <li><Link to="/wrapped">Wrapped</Link></li>
    </ul>
    </nav>
    </>
  )
}
