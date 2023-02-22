import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import {Card} from 'react-bootstrap'
import { GiShoppingBag } from 'react-icons/gi'
import { FaUserAlt } from 'react-icons/fa'

export default function Dashboard({prodLength}) {  

  return (
    <>
    <div className='container my-3'>
      <h2>Dashboard</h2>
    </div>
    <div className='d-flex' style={{padding: '50px', marginLeft:'200px', marginTop:'80px' }} >
    <div className="row" style={{marginLeft:'25px'}} >
      <Card className="m-2 shadow-lg" style={{width: '18rem', height:'18rem', padding:'10px',borderRadius:'25px' }}>
          <Card.Body>
          <Card.Title style={{fontSize:'60px'}}><GiShoppingBag/></Card.Title>
          <Card.Title><h1 style={{fontSize:'70px' }}>{prodLength}</h1></Card.Title>
          <Card.Title><h5>Products</h5></Card.Title>
          </Card.Body>
          </Card>
        </div>
        <div className="row" style={{marginLeft:'160px'}} >
      <Card className="m-2 shadow-lg" style={{width: '18rem', height:'18rem', padding:'10px',borderRadius:'25px' }}>
          <Card.Body>
          <Card.Title style={{fontSize:'60px'}}><FaUserAlt/></Card.Title>
          <Card.Title><h1 style={{fontSize:'70px' }}>0</h1></Card.Title>
          <Card.Title><h5>Customers</h5></Card.Title>
          </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}
