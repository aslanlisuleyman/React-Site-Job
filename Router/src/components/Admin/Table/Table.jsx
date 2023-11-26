

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast'


const Table = ({ item,setFilteredData}) => {
  const handleDelete = () => {
    axios.delete(`https://northwind.vercel.app/api/products/${item.id}`)
      .then(() => {
        setFilteredData((deleted) => deleted.filter((i) => i.id !== item.id));
        toast.success("Uğurla silindi")
      })
      
  };

 

  return (
    <>
      <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.unitPrice}</td>
      <td><button className='btn btn-danger' onClick={handleDelete} >Delete</button></td>
      <td> <Link to='/admin/EditProduct'><button  className='btn btn-warning'>Edit</button></Link></td>
    </tr>
  
    </>
  );
};

export default Table;
