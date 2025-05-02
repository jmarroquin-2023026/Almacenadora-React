// src/components/SideBar.jsx
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside
      style={{
        width: '200px',
        background: '#f4f4f4',
        padding: '20px',
        height: '100vh',
        position: 'fixed',
        top: 100,
        left: 0,
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/register">Registrarse</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
