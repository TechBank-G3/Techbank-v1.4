import './App.css'
import React from 'react';
import SignIn from './Pages/SigIn';
import Divisas from './Pages/Divisas';
import Prestamos from './Pages/Prestamos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Transferencias from './Pages/Transferencias';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/conversordivisas',
    element: <Divisas />
  },
  {
    path: '/calculadoraprestamos',
    element: <Prestamos />
  },
  {
    path: '/transferencias',
    element: <Transferencias />
  }

])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );

}
export default App;
