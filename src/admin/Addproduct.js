import React from 'react'

export default function Addproduct({prodImage ,setProdImage ,prodName ,setProdName ,prodPrice ,setProdPrice ,prodDesc ,setProdDesc,AddProductInfo}) {
    
  return (
    <>
    <div className="my-4">
    <h2>Add Products Here</h2>
    
    <form className="col g-3" onSubmit={AddProductInfo} style={{padding: '50px', marginLeft: '380px'}} >
    <div className="col-mb my-2">
        <label htmlFor="prod_name" style={{display: '-webkit-box'}} className="form-label">Product Name:</label>
        <input type="text" style={{width: '500px'}} name="prod_name" value={prodName} onChange={(e)=>setProdName(e.target.value)} className='form-control'/>
    </div>
    <div className="col-mb my-2">
        <label htmlFor="prod_price" style={{display: '-webkit-box'}} className="form-label">Product Price(₹):</label>
        <input type="text" style={{width: '500px'}} name="prod_price" value={prodPrice} onChange={(e)=>setProdPrice(e.target.value)} className='form-control' />
    </div>
    <div className="col-mb my-2">
        <label htmlFor="RegistrationNo" style={{display: '-webkit-box'}} className="form-label">Product Description:</label>
        <textarea type="text" style={{width: '500px'}} name="prod_desc" value={prodDesc} onChange={(e)=>setProdDesc(e.target.value)} className="form-control" ></textarea>
    </div>
    <div className="mb-3">
    <label htmlFor="formFile" style={{display: '-webkit-box'}} className="form-label">Product Image:</label>
    <input className="form-control" style={{width: '500px'}} name="prod_img" onChange={(e)=>setProdImage(e.target.files[0])} type="file" id="formFile"/>
    </div>

    <div className="col-12 my-3" style={{display: 'inline-flex'}}>
        <input type="submit" value="Add Product" className="btn btn-primary" />
    </div>
</form>
</div>
    </>
  )
}
