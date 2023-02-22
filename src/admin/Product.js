import React from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';
import { useState,useEffect } from 'react'
export default function Product({product,setProduct,handleDelete}) {

  const nevigate = useNavigate();
 
  return (
    <>
      
      <div className='container my-4'>
      <h2>Product List</h2>
      </div>

      <div className="row" style={{marginLeft:'150px'}}>
      <Table striped bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          product.map((product)=>
          <tr key={product.id}>
          <td>{product.prod_name}</td>
          <td>{product.prod_price}</td>
          <td>{product.prod_desc}</td>
          <td><img src={product.prod_img} height="80" width="80" alt='' /></td>
          <td><button type="button" onClick={()=>nevigate(`/admin/updateproduct/${product.id}`)} className="btn btn-success">Edit</button></td>
          <td><button type="button" onClick={()=>handleDelete(product.id)} className="btn btn-danger">Delete</button></td>
          
        </tr>
        
          )
        }
        </tbody>
        </Table>
      </div>
    </>
  )
}
