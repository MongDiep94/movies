import { useState, useEffect } from 'react';

import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Avis from './Pages/Avis';
import Movies from './Pages/Movies';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  const onePost = JSON.parse(localStorage.getItem('items')) || []

  const [items, setItems] = useState([onePost]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleClick =()=> {
    setPage(page +1)
  }

  return (
    <>
    <Navbar />
    <Routes>
      <Route path ='/' element={<Home />}/>
      <button onClick={handleClick}>Suivant</button>
      <Route path ='/movies' element={<Movies />}/>
      <Route path ='/avis' element={<Avis posts={items} setPosts={setItems} />}/>

      {/* REDIRECTION >> si on va dans une page "error", la page est redirigée directement à la page d'accueil */}
      <Route path ='/error' element={<Navigate to="/" />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
