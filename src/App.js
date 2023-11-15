import React, { lazy, Suspense, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import "./index.css"

import Homepage from './Homepage1/Homepage';
import { GlobalStyles } from './StyledComponents/GlobalStyles';
import { Context } from './Utilities/Context';

const Signin = lazy(() => import('./SigninPage/Signin'));

function App() {

  let [openModal, setOpenModal,] = useState(false)
  let [modalDetails, setModalDetails] = useState({})


  let providerValue = useMemo(() => ({ 
      openModal, setOpenModal,
      modalDetails, setModalDetails
    }), 
    [
      openModal, setOpenModal,     
      modalDetails, setModalDetails
    ])

  return (
    <>
      <BrowserRouter>
        <>
          <Context.Provider value={providerValue}>
            <Routes>
              <Route exact path='*' element={<Homepage />} />
              <Route exact path='/signin' element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Signin />
                </Suspense>
              } />
            </Routes>
          </Context.Provider>
        </>
      </BrowserRouter>
      <div>
        <GlobalStyles />
      </div>
    </>
  )
}

export default App
