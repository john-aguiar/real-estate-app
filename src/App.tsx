import { useState } from 'react'
import { ActionButtons } from './components/ActionButtons'
import { Header } from './components/Header'
import { Property } from './components/Property'
import { Modal } from './components/Modal'

function App() {
 
  return ( 
    <div className=''>
        <Header />
        <ActionButtons/>
        <Property />
        <Modal />
    </div>

  )
}

export default App
