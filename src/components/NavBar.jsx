import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav style={{
      background: '#333',
      color: '#fff',
      padding: '10px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      <h2 style={{ margin: 0 }}>Mi Aplicación</h2>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: '10px 0 0 0',
        display: 'flex',
        gap: '15px'
      }}>
        <li>
          <Link to="/">
            <img src="https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_1280.png" alt="Inicio" style={{ width: '24px', height: '24px' }} />
          </Link>
        </li>
        <li><Link to="/auth" style={{ color: 'white' }}>Iniciar sesión</Link></li>
        <li><Link to="/register" style={{ color: 'white' }}>Registrarse</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar