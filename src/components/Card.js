import React from 'react'
import '../style-componets/Card.css'

export default function Card({item}) {
    console.log(item)
   
  return (
    <div className='card-product'>
      <div className="image">
        <img src={item.image} alt="" className="mainImg" />
        {/* <img src="" alt="" className="seconfImg" /> */}
      </div>
      <h1>{item.name}</h1>
      <div className="prices">
        <h3>{item.price}</h3>
      </div>
    </div>
  )
}
