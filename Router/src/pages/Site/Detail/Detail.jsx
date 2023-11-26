import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import './Detail.css'

const Detail = () => {
    const {id}=useParams()
    const [detail, setDetails] = useState([])
    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res => {
          setDetails(res.data)
          console.log(res.data)
          
        })
    
      }, [])
  return (
    <div className='details'>

<img
        className="card-img-top card"
        src="https://www.lifewire.com/thmb/0joqidjza7Hij2Hz-7MQ3cGyvYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/impossible-double-diamonds-585239361-5a56a4787d4be800377a85b8.jpg"
        alt="Card cap"
      /> <div className='content'><p>{detail.id}</p> <p>{detail.name}</p> <p>{detail.unitPrice}</p></div> 
    </div>
  )
}

export default Detail
