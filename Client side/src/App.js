import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Upload from './Components/Upload'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Upload />} />
        <Route path='/admin' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App