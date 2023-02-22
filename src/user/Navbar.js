import React from 'react'
import { Link } from 'react-router-dom'
// import {AiFillShopping} from 'react-icons/ai'
export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Shop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="product">Products</Link>
                </li>
                <li className="nav-item mx-2">
                <Link className="nav-link active" to="cart">MyCart</Link>
                </li>
                <li className="nav-item mx-2">
                <Link className="nav-link" to="#">About</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </>
  )
}
