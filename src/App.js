import React from 'react'
import Header from './component/Header'
import Foot from './component/Foot'
import Home from './component/Home'
import Sidbar from './component/Sidbar'

import './App.css'
export default function App() {
  return (
    <div className="wrapper">
     <Header/>
<Foot/>
<Home/>
<Sidbar/>

    </div>
  )
}
