import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { FaShoppingCart } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Detailpage({count,setCount,cartProd,setCartProd,showProdId,setProdId,showProdImage,setShowProdImage,showProdName,setShowProdName,showProdPrice,setShowProdPrice,showProdDesc,setShowProdDesc}) {
    

    const  id  = useParams().id
    const showProducts = async () => {
        try{
        const { data } = await axios.get(`http://127.0.0.1:8000/product/${id}`);
        // console.log(data);
        setProdId(data.id)
        setShowProdImage(data.prod_img)
        setShowProdName(data.prod_name)
        setShowProdPrice(data.prod_price)
        setShowProdDesc(data.prod_desc)
        // console.log(data.id)

        } catch (err) {
            console.log(err.message)
        }
        
    }
    useEffect(()=>{
        showProducts();
    },[])

    const AddToCart = async (showProdId) =>{
        let existProd = cartProd.find((cart)=>
            cart.prodId === showProdId
        );
        console.log(existProd)
        try {
            if(!existProd){
            const res = await axios.post('http://127.0.0.1:8000/cartitems/',{
                cartId : 41,
                prodId : showProdId,
                qty : count
            })
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
         
         }} catch (err) {
             toast.error(err.message, {
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
        
     }

     const handleCount = () => {
        if (count === 1){
          setCount(1);
        }else{
          setCount(count-1);
        }
      }


  return (
    <>
        <div className=' my-3 d-flex bd-highlight flex-column'>
            <h2>Product Detail</h2>
       
        <div className='d-flex'>
        <img src={showProdImage} height="500" width="550" alt='' className='align-self-start my-5' style={{marginLeft:'200px'}} />
        <div style={{marginTop:'90px',marginRight:'300px' , textAlign:'left'}}>
        <h2>{showProdName}</h2>
        <h3>₹ {showProdPrice}</h3><br />
        <h5 style={{color:'grey', textAlign:'justify'}}>{showProdDesc}</h5><br />
        
        <div  style={{display:'inline-flex'}}> 
        <h5>Qty: </h5>
        <button onClick={handleCount} style={{width: '35px',border:'none', fontSize:'20px',borderTopLeftRadius:'15px',borderBottomLeftRadius:'15px'}} > - </button>
        <input type="text" name="prod_qty" value={count} onChange={(e)=>setCount(e.target.value)} style={{width: '60px',border:'none',textAlign:'center',fontSize:'18px'}} /> 
        <button onClick={()=>{setCount(count+1)}} style={{width: '35px',fontSize:'20px',border:'none',backgroundColor:'grey',borderTopRightRadius:'15px',borderBottomRightRadius:'15px' }} > + </button>
        </div>
        
        <button type="button" className="btn btn-warning" onClick={()=>AddToCart(showProdId)} style={{width:'30rem',height:'45px',fontSize:'20px',borderRadius:'25px',marginLeft:'140px' }} ><FaShoppingCart style={{fontSize:'18px',marginBottom:'5px'}}/> Add To Cart</button>
        </div>
        </div>
        </div>
        <ToastContainer style={{width: '500px',height: '200px', fontSize: '22px' }}/>
    </>
  )
}


/*
order : orderid
orderitem: orderId, prodid,   
produsts: prodid
cart : custid, cartid
cart items: cartid , prodid,q
*/
