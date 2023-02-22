import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Userorder({product,cartProd,setCartProd,loadCart,cartTotal}) {
    const delCharge = 40;
      const prom = -40;
      let orderTotal = cartTotal + delCharge;
      let sum = cartTotal + delCharge + prom;

    const [userName,setUserName] = useState("");
    const [userAdd,setUserAdd] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userMob,setUserMob] = useState("");
    const [userCity,setUserCity] = useState("");
    const [userState,setUserState] = useState("");
    const [userPincode,setUserPincode] = useState("");

      const loadUser = async () => {
          try{
          const { data } = await axios.get(`http://127.0.0.1:8000/user/1`);
        //   console.log(data);
         setUserName(data.user_name)
         setUserAdd(data.user_add)
         setUserEmail(data.user_email)
         setUserMob(data.user_mob)
         setUserCity(data.user_city)
         setUserState(data.user_state)
         setUserPincode(data.user_pincode)
        //   console.log(data.user_name)
  
          } catch (err) {
              console.log(err.message)
          }
          
      }
  
      useEffect(()=>{
          loadUser();
          console.log(loadCart)
      },[])


      const toCheckout = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/order/',{
              userId : 1,
              address : userAdd,
              mobile : userMob,
                total: orderTotal
            })

            
            const orderId = res.data.id
            cartProd.forEach(async (cart) => {
                await axios.post('http://127.0.0.1:8000/orderitems/',{
              qty : cart.qty,
              prodId : cart.prodId,
              orderId : orderId
                })
            })
           
        }catch(err){
            console.log(err.message)
        }
      }

      
      

  return (
    <>
        <div className="my-4">
    <h2>Billing Details</h2>

    <div style={{display: 'flex',flexDirection: 'column' ,border: '3px solid orange',margin:'0px 650px'}}>
        <p style={{display:'flex',justifyContent:'space-between',margin:'0px 20px' }}> 
            <span>Items:</span>
            <span>₹ {cartTotal}</span>
        </p>
        
        <p style={{display:'flex',justifyContent:'space-between',margin:'0px 20px' }}>
            <span>Delivery Charge:</span>
            <span>{delCharge}</span>
        </p>
        <p style={{display:'flex',justifyContent:'space-between',margin:'0px 20px' }}>
            <span>Total:</span>
            <span>{orderTotal}</span>
        </p>
        <p style={{display:'flex',justifyContent:'space-between',margin:'0px 20px' }}>
            <span>promotion Applied:</span>
            <span>{prom}</span>
        </p>
        <h4 style={{display:'flex',justifyContent:'space-between',margin:'5px 20px' }}>
            <span>Order Total:</span>
            <span>₹ {sum}</span>
        </h4>
    </div>
    
    <div style={{paddingRight: '500px', marginLeft: '650px',marginTop: '20px'}} >
    <div className="col-mb my-2">
        <label htmlFor="user_name" style={{display: '-webkit-box'}} className="form-label">Full Name:</label>
        <input type="text" style={{width: '500px'}} name="user_name" value={userName} onChange={(e)=>setUserName(e.target.value)} className='form-control'/>
    </div>

    <div className="col-mb my-2">
        <label htmlFor="user_email" style={{display: '-webkit-box'}} className="form-label">Email Address:</label>
        <input type="email" style={{width: '500px'}} name="user_email" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} className='form-control' />
    </div>

    <div className="col-mb my-2">
        <label htmlFor="user_mob" style={{display: '-webkit-box'}} className="form-label">Mobile Number:</label>
        <input type="number" style={{width: '500px'}} name="user_mob" value={userMob} onChange={(e)=>setUserMob(e.target.value)} className='form-control' />
    </div>
    
    <div className="col-mb my-2">
        <label htmlFor="user_add" style={{display: '-webkit-box'}} className="form-label">Address:</label>
        <textarea type="text" style={{width: '500px'}} name="user_add" value={userAdd} onChange={(e)=>setUserAdd(e.target.value)}  className="form-control" ></textarea>
    </div>

    <div className="col-mb my-2">
        <label htmlFor="user_city" style={{display: '-webkit-box'}} className="form-label">City:</label>
        <input type="text" style={{width: '500px'}} name="user_city" value={userCity} onChange={(e)=>setUserCity(e.target.value)} className='form-control'/>
    </div>

    <div className="col-mb my-2">
        <label htmlFor="user_state" style={{display: '-webkit-box'}} className="form-label">State:</label>
        <input type="text" style={{width: '500px'}} name="user_state" value={userState} onChange={(e)=>setUserState(e.target.value)} className='form-control'/>
    </div>

    <div className="col-mb my-2">
        <label htmlFor="user_pincode" style={{display: '-webkit-box'}} className="form-label">Pincode:</label>
        <input type="number" style={{width: '500px'}} name="user_pincode" value={userPincode} onChange={(e)=>setUserPincode(e.target.value)} className='form-control'/>
    </div>

    <div className="col-12 my-3" style={{display: 'inline-flex'}}>
        <button type="button"
            onClick={(e) => toCheckout(e)}
        style={{height: '60px',width: '230px',backgroundColor: 'orange',border: '2px solid white',borderRadius: '15px'}} >Place Order</button>
        <button type="button" style={{height: '60px',width: '230px',backgroundColor: 'white',border: '2px solid orange',borderRadius: '15px',marginLeft: '40px' }} >Cancel Order</button>
    </div>
</div>
</div>
    </>
  )
}
//order : orderid , customer id
//orderitems: oid,pid,q -> oid, get(pid,q <- cartitems) -> {oid , pid , q -> insert -> orderitems}
//cartitems: pid,q