import React from 'react'

import { useParams,Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'


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
           <div id='BtnDiv'>
              <button id="cart">
              <ShoppingCart size={20}/>
              </button>
                <Link to={`/product-details/${p.id}`}>
                        <button>Show More Details</button>
               </Link>
           </div>
         </div>
         ))
       }
    </div>
  )
}
