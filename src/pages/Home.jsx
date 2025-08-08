import React from 'react'
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

import "../CssAll/Home.css"


export default function Home({data}) {
  return (
   <main>
       <section id='HomeSection'>
        <div id='MainDiv'>
           <div className="Postar1">
            <img src="https://images.alphacoders.com/106/thumb-1920-1062272.jpg" alt="" />
           </div>
           <div className="Postar2">
            <img src="https://images8.alphacoders.com/105/thumb-1920-1050950.jpg" alt="" />
           </div>
        </div>
        <div>
          <h1>Jalgaonkar</h1>
          <p>We add elegance to your freedom</p>
          <button>Shop Now <ShoppingBag/> </button>
        </div>
        
    </section>

     <section id='ReadMore'>
        <div className="ReadMoreTextDiv">
          <h1>Ethnically Handcrafted Jewellery</h1>
          <h3>Fair Price</h3>
          <p>Say goodbye to traditional 10x markups. We design fine jewelry that you can wear every single day.</p>
          <h3>High Quality</h3>
          <p>We work with expert jewelers who use high-quality and enduring materials, from precious metals—such as recycled and responsibly mined gold—to ethically sourced diamonds and AAA-grade gemstones.</p>
          <button>Read More</button>
        </div> 
        <div className="ReadMoreImg">
          <img src="https://i.pinimg.com/736x/a4/c5/06/a4c5067de341557e575d98960517ef23.jpg" alt="" />
        </div>      
     </section>
     
     <section id='SeeMore'>
       <div className="SeeMoreText">
        <h1>Dive into our everyday wear collection</h1>
        <p><Link>See More</Link></p>
       </div>
       <div id="slindarBox">
          {/* <div className="cart">
            <img src="" alt="" />
            <p>Earring</p>
          </div>*/}
         
          {/* {
            data.map((e)=>(
                <div className="cart">
                    <img src={`${e.postar}`} alt="" />
                    <p><Link to={"/store"}>{`${e. category}`}</Link></p>
                </div>  
            ))
          } */}
          {[...new Set(data.map(e => e.category))].map((category, index) => {
            const item = data.find(e => e.category === category);
            return (
              <div className="cart" key={index}>
                <img src={`${item.postar}`} alt={category} />
                <p><Link to={"/store"}>Sho All {category}</Link></p>
              </div>
            );
          })}
       </div>
     </section>
     <section>

     </section>
   </main>
      
    
  )
}
