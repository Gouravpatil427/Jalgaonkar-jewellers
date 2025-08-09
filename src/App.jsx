import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from 'react'

import NavBar from './NavBarFooter/NavBar'
import Home from './pages/Home'
import Coupons from './pages/Coupons'
import About from './pages/About'
import Store from './pages/Store'
import Connect from './pages/Connect'
import SingInUp from './pages/SingInUp'
import Footer from './NavBarFooter/Footer'
import ShoCategoryProduct from './pages/ShoCategoryProduct'
import ProductDetails from './pages/ProductDetails'

export default function App() {
   const [Data, setData] = useState([
  {
    id: 101,
    poster: "https://img.tatacliq.com/images/i19//437Wx649H/MP000000023353314_437Wx649H_202408181715441.jpeg",
    JewelryName: "Classic Solitaire Ring",
    Price: 18500,
    Gram: "2.5 gm",
    category: "Ring",
    description: "Timeless 22 K gold solitaire engagement ring, 91.6 % purity, hallmarked."
  },
  {
    id: 102,
    poster: "https://cdn1.jewelxy.com/live/img/business_product/XtVPx6Pd4Z_20211014162630.jpg",
    JewelryName: "Elegant Gold Chain",
    Price: 42000,
    Gram: "14 gm",
    category: "Chain",
    description: "Hand-woven 22 K flat link chain with lobster clasp, ideal for daily wear."
  },
  {
    id: 103,
    poster: "https://t4.ftcdn.net/jpg/06/95/46/17/360_F_695461716_tnpwMR7YYXFNFVI5rqqI0ldpVUM0rsKD.jpg",
    JewelryName: "Temple Necklace",
    Price: 95000,
    Gram: "32 gm",
    category: "Necklaces",
    description: "South-Indian temple motif necklace studded with Kemp stones, 22 K gold."
  },
  {
    id: 100,
    poster: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Diamond Stud Earrings",
    Price: 22000,
    Gram: "3 gm",
    category: "Earrings",
    description: "Round brilliant-cut diamonds set in 18 K yellow gold, push-back closure."
  },
  {
    id: 104,
    poster: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Men’s Signet Ring",
    Price: 27500,
    Gram: "9 gm",
    category: "Ring",
    description: "Bold rectangular signet ring with matte finish, 22 K hallmarked gold."
  },
  { 
    id: 105,
    poster: "https://smarsjewelry.com/cdn/shop/files/1435.1.jpg?v=1728388618",
    JewelryName: "Pearl Drop Pendant",
    Price: 15000,
    Gram: "4 gm",
    category: "Pendant",
    description: "Single freshwater pearl suspended from 22 K filigree bail."
  },
  {
    id: 106,
    poster: "https://cdn.pixabay.com/photo/2019/06/19/10/23/gold-4284582_1280.jpg",
    JewelryName: "Infinity Bangle Pair",
    Price: 76000,
    Gram: "26 gm",
    category: "Bangles",
    description: "Mirror-polished 22 K gold bangles with infinity symbol engraving."
  },
  {
    id: 107,
    poster: "https://images.unsplash.com/photo-1588444650209-aa4d70d217b8?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Rose Gold Hoops",
    Price: 18000,
    Gram: "5 gm",
    category: "Earrings",
    description: "Light-weight 18 K rose gold hoops with snap-bar closure."
  },
  {
    id: 108,
    poster: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Mangalsutra",
    Price: 55000,
    Gram: "18 gm",
    category: "Necklaces",
    description: "Traditional black-bead mangalsutra with 22 K gold pendant."
  },
  {
    id: 109,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMT-_LEpc_kRL6vF0ueeD7e4G-zNWDeKLTIQ&s",
    JewelryName: "Gold Anklet Pair",
    Price: 32000,
    Gram: "11 gm",
    category: "Anklets",
    description: "Delicate 22 K gold anklets with ghungroo bells, adjustable links."
  },
  {
    id: 110,
    poster: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Emerald Cut Ring",
    Price: 67000,
    Gram: "7.5 gm",
    category: "Ring",
    description: "Rectangular emerald-cut emerald framed by 22 K gold halo."
  },
  {
    id: 111,
    poster: "https://www.tarangarts.com/product_image/s1200__aHR0cHM6Ly9zdGF0aWMudGFyYW5nYXJ0cy5jb20vcHJvZHVjdF9pbWFnZXMvczEyMDBfXzE3MTA3NTE5NzU2NzIuanBn",
    JewelryName: "Toe Ring Set",
    Price: 8500,
    Gram: "2 gm",
    category: "Toe-Ring",
    description: "Adjustable 22 K gold toe rings with floral carving, set of 2."
  },
  {
    id: 112,
    poster: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcbc20efb/images/hi-res/513018BTSAA00.jpg?sw=640&sh=640",
    JewelryName: "Box Link Bracelet",
    Price: 48000,
    Gram: "16 gm",
    category: "Bracelet",
    description: "Solid 22 K box-link bracelet, polished finish, tongue clasp."
  },
  {
    id: 113,
    poster: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Jhumka Earrings",
    Price: 29000,
    Gram: "9.5 gm",
    category: "Earrings",
    description: "Traditional bell-shaped 22 K gold jhumkas with filigree work."
  },
  {
    id: 114,
    poster: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Stackable Bands",
    Price: 12000,
    Gram: "1.8 gm each",
    category: "Ring",
    description: "Set of three 22 K slim bands with hammered, matte & polished textures."
  },
  {
    id: 115,
    poster: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Ruby Choker",
    Price: 78000,
    Gram: "24 gm",
    category: "Necklaces",
    description: "Victorian-style 22 K gold choker studded with Burmese rubies."
  },
  {
    id: 116,
    poster: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Nose Pin",
    Price: 5500,
    Gram: "0.8 gm",
    category: "Nose-Pin",
    description: "22 K gold screw-type nose pin with single CZ stone."
  },
  {
    id: 117,
    poster: "https://images.unsplash.com/photo-1588444650209-aa4d70d217b8?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Kada Bangle",
    Price: 65000,
    Gram: "22 gm",
    category: "Bangles",
    description: "Wide 22 K gold kada with peacock motifs, hinged opening."
  },
  {
    id: 118,
    poster: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Heart Locket",
    Price: 25000,
    Gram: "6.5 gm",
    category: "Pendant",
    description: "Engravable 22 K heart locket with mirror polish."
  },
  {
    id: 119,
    poster: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Beads Bracelet",
    Price: 16000,
    Gram: "5 gm",
    category: "Bracelet",
    description: "22 K gold beads threaded on silk cord, adjustable knot."
  },
  {
    id: 120,
    poster: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Oval Locket Ring",
    Price: 31000,
    Gram: "8 gm",
    category: "Ring",
    description: "Secret locket ring with hinged oval top, holds tiny photo."
  },
  {
    id: 121,
    poster: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Layered Chain",
    Price: 85000,
    Gram: "28 gm",
    category: "Chain",
    description: "Three-layer 22 K curb chain with adjustable length."
  },
  {
    id: 122,
    poster: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Stud Nose Ring",
    Price: 4200,
    Gram: "0.6 gm",
    category: "Nose-Pin",
    description: "18 K tiny floral stud, surgical-steel post, hypoallergenic."
  },
  {
    id: 123,
    poster: "https://images.unsplash.com/photo-1588444650209-aa4d70d217b8?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Tennis Bracelet",
    Price: 96000,
    Gram: "12 gm",
    category: "Bracelet",
    description: "22 K gold tennis bracelet with single-row CZ stones."
  },
  {
    id: 124,
    poster: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Polki Pendant",
    Price: 47000,
    Gram: "15 gm",
    category: "Pendant",
    description: "Uncut polki diamonds set in 22 K gold floral frame."
  },
  {
    id: 125,
    poster: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Thread Anklet",
    Price: 9000,
    Gram: "3 gm",
    category: "Anklets",
    description: "Black silk thread anklet with 22 K gold charms."
  },
  {
    id: 126,
    poster: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Gold Coin Pendant",
    Price: 35000,
    Gram: "10 gm",
    category: "Pendant",
    description: "22 K 10-gram gold coin framed in filigree bail."
  },
  {
    id: 127,
    poster: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Infinity Ring",
    Price: 22000,
    Gram: "4 gm",
    category: "Ring",
    description: "Interlocking infinity symbol ring in 22 K polished gold."
  },
  {
    id: 128,
    poster: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Pearl Strand",
    Price: 63000,
    Gram: "20 gm",
    category: "Necklaces",
    description: "22 K gold capped cultured-pearl strand, 18-inch princess length."
  },
  {
    id: 129,
    poster: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Hoop Earrings",
    Price: 25000,
    Gram: "7 gm",
    category: "Earrings",
    description: "Medium 22 K gold hinged hoops with click closure."
  },
  {
    id: 130,
    poster: "https://images.unsplash.com/photo-1588444650209-aa4d70d217b8?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Cuff Bangle",
    Price: 73000,
    Gram: "25 gm",
    category: "Bangles",
    description: "Open-cuff 22 K gold bangle with hammered texture."
  },
  {
     id: 131,
    poster: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Three-Stone Ring",
    Price: 54000,
    Gram: "6 gm",
    category: "Ring",
    description: "Past, present, future trilogy ring with CZ stones in 22 K gold."
  },
  {
     id: 132,
    poster: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Layered Anklet",
    Price: 18500,
    Gram: "6 gm",
    category: "Anklets",
    description: "Double-layer 22 K gold chain anklet with heart charm."
  },
  {
     id: 133,
    poster: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Evil-Eye Bracelet",
    Price: 13000,
    Gram: "4 gm",
    category: "Bracelet",
    description: "22 K gold evil-eye motif bracelet with adjustable cord."
  },
  {
     id: 134,
    poster: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Kundan Earrings",
    Price: 35000,
    Gram: "11 gm",
    category: "Earrings",
    description: "Traditional 22 K gold kundan drop earrings with pearl hangings."
  },
  {
     id: 135,
    poster: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Rope Chain",
    Price: 58000,
    Gram: "19 gm",
    category: "Chain",
    description: "Twisted 22 K rope chain, 20-inch length, lobster clasp."
  },
  {
     id: 136,
    poster: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Navaratna Necklace",
    Price: 110000,
    Gram: "36 gm",
    category: "Necklaces",
    description: "22 K gold necklace with nine auspicious gemstones, 18-inch."
  },
  {
     id: 137,
    poster: "https://images.unsplash.com/photo-1588444650209-aa4d70d217b8?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Stack Bangle Set",
    Price: 90000,
    Gram: "30 gm",
    category: "Bangles",
    description: "Set of six 22 K slim plain bangles, mix-and-match style."
  },
  {
     id: 138,
    poster: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Cross Pendant",
    Price: 28000,
    Gram: "8 gm",
    category: "Pendant",
    description: "22 K polished gold cross pendant with satin finish."
  },
  {
     id: 139,
    poster: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Charm Bracelet",
    Price: 21000,
    Gram: "7 gm",
    category: "Bracelet",
    description: "22 K gold bracelet with five interchangeable charms."
  },
  {
     id: 140,
    poster: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=60",
    JewelryName: "Paisley Studs",
    Price: 16000,
    Gram: "4.5 gm",
    category: "Earrings",
    description: "22 K gold paisley-shaped studs with screw-backs."
  }
]);
  
  return (
    <div>
       <BrowserRouter>
        <NavBar/>
        <Routes>
          
          <Route path='/' element={<Home data={Data}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/coupons' element={<Coupons/>}/>
          <Route path='/store' element={<Store data={Data}/>}/>
          <Route path='/connect' element={<Connect/>}/>
          <Route path='/singInUp' element={<SingInUp/>}/>
          <Route path='/sho-category-product/:CategoryParams' element={<ShoCategoryProduct data={Data}/>}/>
          <Route path='/product-details/:id' element={<ProductDetails data={Data}/>}/>

        </Routes>
        <Footer/>
       </BrowserRouter>
    </div>
  )
}
