import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
export default function Layout2() {
  return (
    <>
        <div className='App'>
            <Navbar />
        </div>
        <div className='App'>
            <Outlet />
        </div>
    </>
  )
}
