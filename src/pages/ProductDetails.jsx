import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import "../CssAll/ProductDetails.css"


export default function ProductDetails({data}) {
    const {id}=useParams()
  return (
  <div id='meanbox'>
        {
          data.filter(e => e.id === Number(id)).map((p)=>(
            <div id='Box'>
               <img src={p.poster} alt="" />
                <div id='TextDiv'>
                    <h2>{p.JewelryName}</h2>
                     <p className='p'>Gram: {p.Gram}</p>
                     <p className='p'>Price: {p.Price}</p>
                     <p>{p.description}</p>
                     <Link>
                       <button id='ShopCart'>Add To Cart</button>
                    </Link>
                </div>
              
            </div>
          ))
        }
    </div>
  )
}
