import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
export default function Layout() {
  return (
    <>
    <div className='App'>
        <Nav />
        <Sidebar/>
    </div>
    <div className='container'>
        <Outlet />
    </div>
    </>
  )
}
