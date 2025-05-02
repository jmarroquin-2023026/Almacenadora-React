import './App.css'
import { Register } from './components/Register'
import { Login } from './components/Login'
import Sidebar from './components/SideBar'
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom'
import { routes } from './routes'

function App() {
  const elements=useRoutes(routes)
  return (
    <>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: '200px', padding: '20px' }}>
        {elements}
      </div>
    </>
  )
}

export default App