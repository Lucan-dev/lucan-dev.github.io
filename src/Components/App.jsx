import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Layout from './Page Sections/Layout'
import Certifications from './Pages/Certifications'
import Achievements from './Pages/Achievements'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/certifications" element={<Certifications/>}/>
            <Route path="/achievements" element={<Achievements/>}/>
          </Route>
        </Routes>
      </Router> 
    </>
  )
}

export default App
