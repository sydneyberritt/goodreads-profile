import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home'
import { NavBar } from './NavBar'
import { Profile } from './Pages/profile'
import { Highlights } from './Pages/highlights'
import { Recent } from './Pages/recent'
import { Wrapped } from './Pages/wrapped'
import { BookDataProvider } from './BookDataContext';

function App() {

  return (
      <Router>
        <BookDataProvider>
        <NavBar/>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/profile" element={<Profile/>}/>
          <Route path ="/highlights" element={<Highlights/>}/>
          <Route path ="/recent" element={<Recent/>}/>
          <Route path ="/wrapped" element={<Wrapped/>}/>
        </Routes>
        </BookDataProvider>
      </Router>
  )
}

export default App
