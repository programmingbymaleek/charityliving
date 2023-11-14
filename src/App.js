import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import "./index.css"
import Homepage from './Homepage1/Homepage';
import { GlobalStyles } from './StyledComponents/GlobalStyles';

const Signin = lazy(() => import('./SigninPage/Signin'));

function App() {

  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route exact path='*' element={<Homepage />} />
            <Route exact path='/signin' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Signin />
              </Suspense>
            } />
          </Routes>
        </>
      </BrowserRouter>
      <div>
        <GlobalStyles/>
      </div>
    </>
  )
}

export default App
