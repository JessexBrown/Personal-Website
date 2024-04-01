import { useState } from 'react' // For light and dark mode in the future
import './App.css'
import MainPage from './components/pages/MainPage'
import PDFViewer from './components/pages/PDFViewer'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<MainPage />}/>
      <Route path="/resume" element={<PDFViewer />}/>
    </>
   
  )
);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
