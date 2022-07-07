import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Upload from './Components/Upload'
function App() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<Home />}/>
        <Route path='/' element={<Upload />} />
      </Routes>
    </>
  )
}

export default App