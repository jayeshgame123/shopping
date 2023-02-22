//import logo from './logo.svg';
import './App.css';
//import Nav from './admin/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './admin/Dashboard';
import { Routes,Route } from 'react-router-dom';
import Userpage from './admin/Userpage';
import Product from './admin/Product';
import Layout from './admin/Layout';
import Layout2 from './user/Layout2';
import Home from './user/Home';
import Userprod from './user/Userprod';
import Addproduct from './admin/Addproduct';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Updateproduct from './admin/Updateproduct';
import Detailpage from './user/Detailpage';
import Mycart from './user/Mycart';
import axios from 'axios';
import Userorder from './user/Userorder';


function App() {
  // const [isUpdated,setIsUpdated] = useState(false);
  const [prodLength,setProdLength] = useState(0);
  const [product,setProduct] = useState([]);
  const [prodImage,setProdImage] = useState(null)
  const [prodName,setProdName] = useState("")
  const [prodPrice,setProdPrice] = useState("")
  const [prodDesc,setProdDesc] = useState("")

  const [editProdImage,setEditProdImage] = useState(null)
  const [editProdName,setEditProdName] = useState("")
  const [editProdPrice,setEditProdPrice] = useState("")
  const [editProdDesc,setEditProdDesc] = useState("")

  const [showProdId,setProdId] = useState()
  const [showProdImage,setShowProdImage] = useState(null)
  const [showProdName,setShowProdName] = useState("")
  const [showProdPrice,setShowProdPrice] = useState("")
  const [showProdDesc,setShowProdDesc] = useState("")

  const [cartProd,setCartProd] = useState([]);
  const [count,setCount] = useState(1);

  //Dashboard
    useEffect(()=>{
        const getProduct = async () => {
          const response = await axios.get('http://127.0.0.1:8000/product/')
          setProdLength(response.data.length)
          // console.log(response.data.length)
        }
        getProduct();
      },[])

  //Product(get product)
  const getProduct = async () => {
    const response = await axios.get('http://127.0.0.1:8000/product/')
    setProduct(response.data)
    // console.log(response.data.length)
  }
  useEffect(()=>{
    getProduct();
  },[])
  
  //Product(delete)
  const handleDelete = async (id) =>{
    try {
      const res=await axios.delete(`http://127.0.0.1:8000/product/${id}`)
      const updatedProducts = product.filter((product) => product.id !== id)
      alert(res.data);
      setProduct(updatedProducts)
    }catch (error) {
      alert(error);
    }
  };

  // Addproduct

  const nevigate = useNavigate();
    const AddProductInfo = async (e) =>{
        e.preventDefault()
        let formField = new FormData()
        formField.append('prod_name', prodName)
        formField.append('prod_price', prodPrice)
        formField.append('prod_desc', prodDesc)
        formField.append('prod_img',prodImage)
        try {
           const res = await axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/product/',
                data: formField
            })

            alert(res.data);
            nevigate('/admin/product');
        } catch (err) {
            alert(err.message)
        }
       
    }

    //getCart
    const getCart = async () => {
      const cartId = 41
      const res = await axios.get(`http://127.0.0.1:8000/cartitems/${cartId}/`)
      console.log(res)
      setCartProd(res.data)
    }
    useEffect(() => {
      getCart();
    },[])
  
    //loadcart product
    const loadCart = product.filter((product) => {
      return cartProd.some((cart)=>{
        return cart.prodId === product.id;
      });
    });
    console.log(loadCart,'load')

    //total cart price
  let cartTotal = 0;
  cartTotal = loadCart.reduce((total,c,index) => {
    return total + parseFloat(c.prod_price)*parseFloat(cartProd[index].qty) 
  },0)

  


  
  return (
    <div className="App">
      
        <Routes>
          <Route path="/admin/" element={<Layout/>} >
          
            <Route index element={<Dashboard prodLength={prodLength} setProdLength={setProdLength} />} ></Route>
            
            <Route path="userpage" element={<Userpage/>} ></Route>
            <Route path="product" element={<Product product={product} setProduct={setProduct} handleDelete={handleDelete} />} ></Route>
            <Route path="addproduct" element={<Addproduct prodImage={prodImage} setProdImage={setProdImage} prodName={prodName} setProdName={setProdName} prodPrice={prodPrice} setProdPrice={setProdPrice} prodDesc={prodDesc} setProdDesc={setProdDesc} AddProductInfo={AddProductInfo} />}></Route>
            <Route path="updateproduct/:id" element={<Updateproduct editProdImage={editProdImage} setEditProdImage={setEditProdImage} editProdName={editProdName} setEditProdName={setEditProdName} editProdPrice={editProdPrice} setEditProdPrice={setEditProdPrice} editProdDesc={editProdDesc} setEditProdDesc={setEditProdDesc} />}></Route>
          </Route>
          <Route path="/" element={<Layout2/>} >
          <Route index element={<Home/>} ></Route>
          <Route index path="product" element={<Userprod product={product} setProduct={setProduct} />} ></Route>
          <Route index path="product/:id" element={<Detailpage count={count} setCount={setCount} cartProd={cartProd} setCartProd={setCartProd} showProdId={showProdId} setProdId={setProdId} showProdImage={showProdImage} setShowProdImage={setShowProdImage} showProdName={showProdName} setShowProdName={setShowProdName} showProdPrice={showProdPrice} setShowProdPrice={setShowProdPrice} showProdDesc={showProdDesc} setShowProdDesc={setShowProdDesc} />} ></Route>
          <Route index path="cart/" element={<Mycart product={product} setProduct={setProduct} count={count} setCount={setCount} cartProd={cartProd} setCartProd={setCartProd} loadCart={loadCart} cartTotal={cartTotal} />} ></Route>
          <Route index path="userorder/" element={<Userorder product={product} cartProd={cartProd} setCartProd={setCartProd} loadCart={loadCart} cartTotal={cartTotal} /> } ></Route>
          </Route>
        </Routes>
      
    </div>
  );
}

export default App;
