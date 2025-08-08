import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

import "../CssAll/NavBar.css"





export default function NavBar() {
  return (
    <nav>
      <h2>Jalgaonkar Jewellers</h2> 
      <div id="SearchBox">
        <input type="text" placeholder='Search' /> 
        <button><Search/></button>
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
  )
}
