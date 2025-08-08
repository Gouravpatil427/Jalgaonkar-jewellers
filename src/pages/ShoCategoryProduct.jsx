import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'lucide-react'

import "../CssAll/ShoCategoryProduct.css"

export default function ShoCategoryProduct({data}) {
    const {CategoryParams} = useParams()
  return (
    <div id='AllBox'>
       {
         data.filter(e => e.category === CategoryParams).map((p)=>(
          <div className="ProductCart">
             <img src={p.poster} alt="" />
             <h2>{p.JewelryName}</h2>
             <p>{p.description}</p>
             <h4>{p.Gram}</h4>
             <h4>{p.Price}</h4>
             <button><Link to={""}>Sho</Link></button>
         </div>
         ))
       }
    </div>
  )
}
