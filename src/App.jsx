import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* Header Section */}
      <Header />
      
      {/* Outlet for child components */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer Section */}
      <Footer />
    </>
  );
}
export default App;
