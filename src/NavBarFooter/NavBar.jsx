import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

import "../CssAll/NavBar.css"





export default function NavBar() {
  return (
   <div>
     <nav>
      <h2>Jalgaonkar Jewellers</h2> 
      <div id="SearchBox">
        <input type="text" placeholder='Search' /> 
        <button id="Search"><Search/></button>
      </div> 
      <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/about"}>About</Link>
        </li>
        <li>
            <Link to={"/coupons"}>Coupons</Link>
        </li>
        <li>
            <Link to={"/store"}>Store</Link>
        </li>
        <li>
            <Link to={"/connect"}>Connect</Link>
        </li>
        <li>
            <Link to={"/singInUp"}>SingInUp</Link>
        </li>
      </ul>
    </nav>
     {/* <div className="ulbox">
       <ul>
        <li>
          <Link>Pandora</Link>
        </li>
        <li>
          <Link>Nomination</Link>
        </li>
        <li>
          <Link>Ladies</Link>
        </li>
        <li>
          <Link>Mens</Link>
        </li>
        <li>
          <Link>Brands</Link>
        </li>
        <li>
          <Link>Fine Jewellery</Link>
        </li>
        <li>
          <Link>Watches</Link>
        </li>
        <li>
          <Link>Wedding</Link>
        </li>
        <li>
          <Link>Sale</Link>
        </li>
       </ul>
     </div> */}
   </div>
  )
}
