

import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import axios from 'axios';
import './Products.css';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const Products = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [favorites, setFavorites] = useState(
    localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : []
  );
  const [loading, setLoading] = useState(true);
  const [favoritesCount, setFavoritesCount] = useState(favorites.length);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products').then((res) => {
      setData(res.data);
      setFilteredData(res.data);
      setLoading(false);
    });
  }, []);

  const addToFavorites = (id) => {
    let item = data.find((item) => item.id === id);

    if (!favorites.find((favItem) => favItem.id === id)) {
      setFavorites([...favorites, item]);
      localStorage.setItem('favorites', JSON.stringify([...favorites, item]));
      setFavoritesCount(favoritesCount + 1);
      toast.success('Əlavə olundu');
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Səbətinizdə mövcuddur',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const searchData = (searchValue) => {
    setFilteredData([
      ...data.filter((item) =>
        item.name.toLowerCase().trim().includes(searchValue.trim().toLowerCase())
      ),
    ]);
  };

  return (
    <div className='umumi'>
      <div className='favorites-count'>Favorites: {favoritesCount}</div>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => {
          searchData(e.target.value);
        }}
      />

      <div className='maincard'>
        {loading ? (
          <div className='spin'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        ) : (
          filteredData.map((item, index) => (
            <Card key={index} item={item} addToFavorites={addToFavorites} />
          ))
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Products;
