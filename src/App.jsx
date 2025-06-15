import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home'
import { Profile } from './Pages/profile'
import { Highlights } from './Pages/highlights'
import { Recent } from './Pages/recent'
import { Wrapped } from './Pages/wrapped'

function App() {

  return (
      <Router>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/profile" element={<Profile/>}/>
          <Route path ="/highlights" element={<Highlights/>}/>
          <Route path ="/recent" element={<Recent/>}/>
          <Route path ="/wrapped" element={<Wrapped/>}/>
        </Routes>
      </Router>
  )
}

export default App
