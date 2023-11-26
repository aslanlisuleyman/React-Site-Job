import React from 'react'
import SiteRoot from '../pages/Site/SiteRoot'
import Home from '../pages/Site/Home/Home'
import Favotites from '../pages/Site/Favorites/Favotites'
import AdminRoot from '../pages/Admin/AdminRoot'
import Product from '../pages/Admin/Product/Product'
import AddProduct from '../pages/Admin/AddProduct/AddProduct'
import ProductDetail from '../pages/Site/ProductDetail/ProductDetail'
import EditProduct from '../pages/Admin/EditProduct/EditProduct'
import Products from '../pages/Site/Products/Products'
import Detail from '../pages/Site/Detail/Detail'


const ROUTER = [{
    path: '/',
    element: <SiteRoot />,
    children: [{
        path: '',
        element: <Home />
    },
    {
        path: 'Favorites',
        element: <Favotites />
    },
    {
        path: 'ProductDetail',
        element: <ProductDetail />
    },
    {
        path: 'Products',
        element: <Products />
    },
    {
        path: 'admin',
        element: <AdminRoot />
    },
    {
        path: '/:id',
        element: <Detail/>
    }
    ]



},
{
    path: '/admin',
    element: <AdminRoot />,
    children: [{
        path: '',
        element: <Product />
    },
    {
        path: 'AddProduct',
        element: <AddProduct />
    },
    {
        path: 'EditProduct',
        element: <EditProduct />
    },

    {
        path: '',
        element: <SiteRoot />
    }
    ]
}]


export default ROUTER
