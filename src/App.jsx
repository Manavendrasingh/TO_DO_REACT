import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import Home from './Home'


function App() {


  return (
    <Provider store = {Store}>
      <Navbar></Navbar>
      <Home></Home>

    </Provider>
  )
}

export default App
