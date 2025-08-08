import React from 'react'
import { Link } from 'react-router-dom'
import "../CssAll/Footer.css"


export default function Footer() {
  return (
    <div>
      <section id='FooterSection1'>
        <div>
          <p>“The brand justifies its name. Freedom with elegance, something that
              every woman deserves.”</p>
        </div>
        <div>
          <h3>
            Forbes
          </h3>
          <h3>
           <span>
             ELLE
           </span>
          </h3>
          <h3>
            <span>
              VOGUE
            </span>
          </h3>
        </div>
      </section>
      <section id='FooterSectio2'>
          <div >
              <h1>Jalgaonkar</h1>
              <Link><h3>Support</h3></Link>
              <Link>
                <h4>FAQ</h4>
              </Link>
               <Link>
                <h4>Virtual shopping</h4>
              </Link>
               <Link>
                <h4>Shipping and Returns</h4>
              </Link>
               <Link>
                <h4>Ring sizer</h4>
              </Link>
               <Link>
                <h4>Contact Us</h4>
              </Link>
          </div>
          <div>
            <Link>
              <p>Company</p>
            </Link>
            <Link>
              <p>About Us</p>
            </Link>
            <Link>
              <p>Stores</p>
            </Link>
            <Link>
              <p>What s new?</p>
            </Link>
          </div>
          <div>
               <h2>Get notified upon new arrivals</h2>

               <p>Your Email-Id Here</p>
 
               <input type="text" placeholder=''/>
          </div>
          <div id='SoshalMediyaLink'>
          
              
          </div>
      </section>
      <section id='FooterSectin3'>
                  <p>Terms and conditions</p>
                  <p>Privacy Policiy</p>
                  <p>@2021 Elira Inc</p>
      </section>
    </div>
  )
}

