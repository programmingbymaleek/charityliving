import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import "./index.css"
import Homepage from './Homepage1/Homepage';


function App() {

  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route exact path='*' element={<Homepage />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  )
}

export default App
