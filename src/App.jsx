import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { routes } from './routes';
import { Toaster } from 'react-hot-toast';
import { useRoutes } from 'react-router-dom';

function App() {
  const elements = useRoutes(routes);
  
  return (
    <>
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 mt-16 p-5 min-h-[calc(100vh-4rem)]">
        {elements}
        <Toaster position="bottom-right" />
      </main>
    </>
  );
}

export default App;