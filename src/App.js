import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Estudiante from './page/Estudiante';
import FormEstudiantes from './page/FormEstudiantes';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={Estudiante} />
        <Route path='/new' element={FormEstudiantes} />

      </Routes>

    </BrowserRouter>
  )
};

export default App;
