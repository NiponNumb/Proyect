import React from 'react';
import Login from './pages/login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect } from 'react';
import { AuthProvider } from './providers/AuthProvider';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { supabase } from './supabase/client';
import Home2 from './pages/Home2';


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/')
      } else {
        navigate('/home')
      }
    })
  }, [])
  return (
    <div className='m-7'>
      
  
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route
          path="/crud"
          element={<Home2 />}
        />
        <Route path='/home' element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
