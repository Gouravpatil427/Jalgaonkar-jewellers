import React from 'react'
import "../CssAll/Store.css"
import { Link } from 'react-router-dom'

export default function Store({data}) {
  return (
    <div id='StoreBox'>
        {
        data.map((e)=>(
            <div className="StoreCart">
         <img src={e.poster} alt="" />
         <h2>{e.JewelryName}</h2>
         <p>{e.description}</p>
         <h4>{e.Gram}</h4>
         <h4>{e.Price}</h4>
         <Link to={`/product-details/${e.id}`}>
         <button>Show More Detials</button>
         </Link>
       </div>
        ))
       }
        
    </div>
  )
}


