import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CreatePost from './Pages/createPost';
import Feed from './Pages/feed';
import Postcard from './Pages/postcard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreatePost/>}/>
        <Route path="/feed" element={<Feed/>} />
        <Route path="/feed/:id" element={<Postcard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
