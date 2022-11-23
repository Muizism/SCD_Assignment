import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   price: "",
   stock:"",
   image: ""
   
 });
 <BrowserRouter>  const navigate = useNavigate(); </BrowserRouter>
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:3001/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", price: "" , stock:"", image:""});
 <BrowserRouter> navigate("/");</BrowserRouter> 
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div >
     <h3>Add Products</h3>
     <form onSubmit={onSubmit}>

     <div className="form-group"  data-testid='product-test'>
         <label htmlFor="Product_id">Product id:</label>
         <input
           type="text"
           className="form-control"
           id="product_id"
           value={form.product_id}
           onChange={(e) => updateForm({ product_id: e.target.value })}
         />
       </div>

       <div className="form-group"  data-testid='name_id' >
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group"  data-testid='price-test'>
         <label htmlFor="price">price</label>
         <input
           type="number"
           className="form-control"
           id="price"
           value={form.price}
           onChange={(e) => updateForm({ price: e.target.value })}
         />
       </div>
       <div className="form-group"  data-testid='stock_testID'>
         <label htmlFor="stock">stock</label>
         <input
           type="number"
           className="form-control"
           id="stock"
           value={form.stock}
           onChange={(e) => updateForm({ stock: e.target.value })}
         />
       </div>

<div>
<h3>Add Image:</h3>
<input type="file" />

</div>
<br>
</br>
       <div className="form-group" data-testid='btn-test'>
         <input
           type="submit"
           value="Add"
           className="btn btn-primary"
          
         />
       </div>
       
     </form>
   </div>
 );
}


