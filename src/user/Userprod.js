import React from 'react'
import { Link } from 'react-router-dom';
// import { getProduct } from '../services/service'
import {Card} from 'react-bootstrap'
export default function User_prod({product,setProduct}) {


  return (
    <>
      <div className='container my-3'>
      <h2>Products</h2>
      </div>
        
      <div className="row" style={{margin:'50px 150px'}} >
        {
          product.map((products)=>
          <Card className="m-3 shadow-lg" style={{width: '18rem',border: 'none',borderRadius: '20px'}} key={products.id}>
          <Link to={`/product/${products.id}`} >
          <Card.Img  variant="top" src={products.prod_img} style={{marginTop:'15px'}} />
          </Link>
          <Card.Body>
          <Card.Title style={{textAlign: 'left',fontSize: '24px'}}>{products.prod_name}</Card.Title>
          <Card.Text style={{textAlign: 'left',fontSize: '20px',color: 'gray'}}>₹{products.prod_price}</Card.Text>
          {/* <Card.Text>Description:{product.prod_desc}</Card.Text> */}
          {/* <Button variant="primary">Show Details</Button> */}
          </Card.Body>
          </Card>
          
          )
        }
      </div>
    </>
  )
}
