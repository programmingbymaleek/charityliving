import React, { lazy, Suspense, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import "./index.css"

import Homepage from './Components/Homepage';
import { GlobalStyles } from './StyledComponents/GlobalStyles';
import { Context } from './Utilities/Context';

const Signin = lazy(() => import('./Components/Signin'));
const Givepage = lazy(() => import('./Components/Givepage'))

function App() {

  let [openModal, setOpenModal,] = useState(false)
  let [modalDetails, setModalDetails] = useState({})
  let [navStyleObject, setNavStyleObject] = useState({})


  let providerValue = useMemo(() => ({ 
      openModal, setOpenModal,
      modalDetails, setModalDetails,
      navStyleObject, setNavStyleObject,
    }), 
    [
      openModal, setOpenModal,     
      modalDetails, setModalDetails,
      navStyleObject, setNavStyleObject,
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
              <Route exact path='/givepage' element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Givepage />
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
