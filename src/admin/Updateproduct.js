import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import React, { useEffect } from 'react'

export default function Updateproduct({editProdImage,editProdName,editProdPrice,editProdDesc,setEditProdImage,setEditProdName,setEditProdPrice,setEditProdDesc}) {
    
    const nevigate = useNavigate();
    const  id  = useParams().id
    // console.log(useParams())
      const loadProducts = async () => {
          try{
          const { data } = await axios.get(`http://127.0.0.1:8000/product/${id}`);
          console.log(data);
         setEditProdImage(data.prod_img)
         setEditProdName(data.prod_name)
         setEditProdPrice(data.prod_price)
         setEditProdDesc(data.prod_desc)
          console.log(data.prod_name)
  
          } catch (err) {
              console.log(err.message)
          }
          
      }
  
      useEffect(()=>{
          loadProducts();
      },[])
  
      const updateProdInfo = async (e) =>{
          e.preventDefault()
          let formField = new FormData()
          formField.append('prod_name', editProdName)
          formField.append('prod_price', editProdPrice)
          formField.append('prod_desc', editProdDesc)
          formField.append('prod_img',editProdImage)
          try {
              const res = await axios({
                   method: 'put',
                   url: `http://127.0.0.1:8000/product/${id}/`,
                   data: formField
               })
   
               alert(res.data);
               nevigate('/admin/product');
           } catch (err) {
               alert(err.message)
           }
      }
    

  return (
    <>
    <div className="my-4">
    <h2>Update Product Here</h2>
    
    <form className="col g-3" onSubmit={updateProdInfo} style={{padding: '50px', marginLeft: '380px'}} >
    <div className="col-mb my-2">
        <label htmlFor="prod_name" style={{display: '-webkit-box'}} className="form-label">Product Name:</label>
        <input type="text" style={{width: '500px'}} name="prod_name" value={editProdName} onChange={(e)=>setEditProdName(e.target.value)} className='form-control'/>
    </div>
    <div className="col-mb my-2">
        <label htmlFor="prod_price" style={{display: '-webkit-box'}} className="form-label">Product Price:</label>
        <input type="text" style={{width: '500px'}} name="prod_price" value={editProdPrice} onChange={(e)=>setEditProdPrice(e.target.value)} className='form-control' />
    </div>
    <div className="col-mb my-2">
        <label htmlFor="RegistrationNo" style={{display: '-webkit-box'}} className="form-label">Product Description:</label>
        <input type="text" style={{width: '500px'}} name="prod_desc" value={editProdDesc} onChange={(e)=>setEditProdDesc(e.target.value)} className="form-control" />
    </div>
    {/* <img src={prodImage} height="300" width= "150" /> */}
    <div className="mb-3">
    <label htmlFor="formFile" style={{display: '-webkit-box'}} className="form-label">Product Image: (please reupload the image)*</label>
    <input className="form-control" style={{width: '500px'}} name="prod_img" onChange={(e)=>setEditProdImage(e.target.files[0])} type="file" id="formFile"/>
    </div>

    <div className="col-12 my-3" style={{display: 'inline-flex'}}>
        <input type="submit" value="Update Product" className="btn btn-primary" />
    </div>
</form>
</div>
</>
  )
}
