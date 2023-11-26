import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Favorites.css'
const Favotites = () => {
  
  const [favorites, setFavorites] = useState(
    localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );
  const deleteFavorites =(id)=>{
    let item = favorites.find(item=>item.id==id)
    favorites.splice(favorites.indexOf(item),1)
    setFavorites([...favorites])
    localStorage.setItem("favorites",JSON.stringify([...favorites]))
  }

  const handleDelete = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  return (
      <><button style={{ marginLeft: '92%',marginTop:'5px' }} className='btn btn-danger' onClick={
        handleDelete}>Delete All</button>
     <div className='favour'>
     
    {
      favorites.map((item,index)=>{
        return (
          <div key={index} className="card" style={{ width: '18rem' }}>
          <img
            className="card-img-top"
            src="https://www.lifewire.com/thmb/0joqidjza7Hij2Hz-7MQ3cGyvYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/impossible-double-diamonds-585239361-5a56a4787d4be800377a85b8.jpg"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.unitPrice}</p>
              <button onClick={()=>{
                deleteFavorites(item.id)
              }} className='btn btn-danger'>Delete</button>
          </div>
      
          
        </div>

        )
        
      })
    }
    
  </div>
  
  </>
  )
}

export default Favotites
