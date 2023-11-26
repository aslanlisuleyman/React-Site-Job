import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div className='header__div'>
       <img className='img' src="https://media1.thehungryjpeg.com/thumbs2/ori_3659063_3se1lci0rezmcq2d23js4j69gbiswkvrgnltiphk_monogram-is-logo-design.jpg" alt="" />
      <ul className='header__ul'>
        <li>
          <Link style={{color:'white', textDecoration:'none'}} to=''>Products</Link>
        </li>
        <li>
          <Link style={{color:'white', textDecoration:'none'}} to='AddProduct'>AddProduct</Link>
        </li>
        <li>
          <Link  style={{color:'white', textDecoration:'none'}} to='EditProduct'>EditProduct</Link>
        </li>
        <li>
          <Link  style={{color:'white', textDecoration:'none'}} to='/'>Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
