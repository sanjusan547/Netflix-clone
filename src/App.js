import React from 'react'
import Navbar from './components/navbar/navbar'
import Banner from './components/banner/banner'
import './App.css'
import RowPost from './components/rowposts/RowPost'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost/>
    </div>
  )
}

export default App
