import { useState } from 'react';
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Editor from './pages/Editor';
import DocumentView  from './pages/DocumentView';
import NotFound from './pages/NotFound';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/editor/:id?" element={<Editor />}/>
        <Route path="/documentview/:id" element={<DocumentView />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      
    </>
  )
}

export default App
