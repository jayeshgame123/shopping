import React from 'react'
// import {Link} from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
export default function nav() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
        
          <Navbar.Brand style={{paddingLeft: '50px'}} href="#home">
            Admin Dashboard
          </Navbar.Brand>
      </Navbar>
    
    
    
    
    
    
    {/* <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="#">Admin Dashboard</Link>
    <Link className="navbar-brand" to="#">Sign Out</Link>
    <button className="btn btn-outline-danger" type="submit">Sign Out</button>
    </div>
</nav> */}
    
    {/* <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="5" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Admin Dashboard</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="admin/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="admin/userpage">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="admin/product">Products</Link>
          </li>
        </ul>
      </div>
    </div> */}
  
    </>
  )
}
