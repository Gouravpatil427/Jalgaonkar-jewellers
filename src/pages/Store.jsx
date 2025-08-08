import React from 'react'
import "../CssAll/Store.css"
import { Link } from 'lucide-react'

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
         <button><Link to={""}>Sho</Link></button>
       </div>
        ))
       }
        
    </div>
  )
}
