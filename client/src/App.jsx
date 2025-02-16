import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "/components/Header.jsx"
import Entry from "/components/Entry.jsx"


function Footer() {
  return (
      <footer>
          <small>© 2024 Ziroll development. All rights reserved.</small>
      </footer>
  )
}

function App() {
  return (
    <>
       <Header />
       <Entry />
       
    </>
  )
}

export default App
