import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import { ToastContainer,toast } from 'react-toastify';
import { Card,Button } from 'react-bootstrap';
export default function Mycart({product,setProduct,count,setCount,cartProd,setCartProd,loadCart,cartTotal}) {
  
  
  const nevigate = useNavigate();


  //  console.log(loadCart)



  const removeCartItem = async (id) => {
    console.log(id)
      try {
        const cartid = cartProd.find((cartItem)=> cartItem.prodId === id)
        console.log(cartProd)
        const res=await axios.delete(`http://127.0.0.1:8000/cartitems/delete/${id}/`)
        const updatedCartProducts = cartProd.filter((cartProduct) => cartProduct.id !== id)
       
        toast.success(res.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setCartProd(updatedCartProducts)
      }catch (error) {
        toast.error(error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    };

   

  return (
    <>
      <div className='container my-3'>
      <h2>My Cart</h2>
      </div>
      <div style={{paddingLeft: '70rem'}} >
      <h2>Cart Total: ₹ {cartTotal}</h2>
      <button type="button" onClick={()=>{nevigate('/userorder')}} className="btn btn-warning" style={{width:'25rem',height:'45px',fontSize:'20px',borderRadius:'25px' }} >Proceed To Checkout</button>
      </div>
        
      <div className="row" style={{margin:'50px 150px' }} >
        {
          loadCart.map((load,index)=>
          
          <Card className="m-3 shadow-lg" style={{width: '25rem',border: 'none',borderRadius: '20px',display: 'flex',flexDirection: 'row'}} key={load.id}>
          {/* <Link to={`/user/product/${load.id}`} > */}
          <div>
          <Card.Img  variant="top" src={load.prod_img} style={{marginTop:'15px'}} />
          <div  style={{display:'inline-flex'}}>
            <h4>qty: {cartProd[index].qty}</h4>
            
          </div>
          {/* </Link> */}
          </div>
          <div>
          <Card.Body>
          <Card.Title style={{textAlign: 'left',fontSize: '24px'}}>{load.prod_name}</Card.Title>
          <Card.Text style={{textAlign: 'left',fontSize: '20px',color: 'gray'}}>₹{load.prod_price}</Card.Text>
          {/* <Card.Text>Description:{product.prod_desc}</Card.Text> */}
            <Button variant="danger" onClick={() => removeCartItem(cartProd[index].id)} >Remove</Button>
          </Card.Body>
          </div>
          </Card>
          )
        }
      </div>
      <ToastContainer/>
    </>
  )
}
