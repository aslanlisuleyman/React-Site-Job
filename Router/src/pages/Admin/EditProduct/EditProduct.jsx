
import React from 'react';
import './EditProduct.css';
import { useFormik } from 'formik';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast'

const EditProduct = () => {
  const formik = useFormik({
    initialValues: {
      id: '', 
      name: '',
      unitPrice: '',
    },
    onSubmit: (values, { resetForm }) => {
      if(!values.name || !values.unitPrice || !values.id ){
        toast.error("Zəhmət olmasa boşluqları doldurun");
        return;
      }
     
      axios.put(`https://northwind.vercel.app/api/products/${values.id}`, {
        name: values.name,
        unitPrice: values.unitPrice,
      })
      .then(res => {
        console.log(res);
        resetForm();
        toast.success("Dəyişiklik uğurla əlavə olundu")
       
      })
      .catch(error => {
        console.error(error);
      });
    },
  });

  return (
    <div className="div-container">
      <form onSubmit={formik.handleSubmit}>
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <br />
        <input
          className="input-field"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />

        <label className="form-label" htmlFor="unitPrice">
          Unit Price
        </label>
        <br />
        <input
          className="input-field"
          id="unitPrice"
          name="unitPrice"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.unitPrice}
        />
        <br />

        <label className="form-label" htmlFor="id">
          Product ID
        </label>
        <br />
        <input
          className="input-field"
          id="id"
          name="id"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
        <br />

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      <Toaster/>
    </div>
  );
};

export default EditProduct;
