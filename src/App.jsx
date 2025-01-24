import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/features/auth/authslice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      console.log("Restoring user from localStorage:", user); // Debug user
      dispatch(setUser({ user, token }));
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;