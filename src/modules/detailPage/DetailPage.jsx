import React from 'react';
import './DetailPage.css';
import UseDatailPage from './UseDatailPage';

export default function DetailPage() {
 const [{productData}] = UseDatailPage()
 console.log(productData);
  return (
    <div>
            <h1>Detail page</h1>

      {
      productData.map((item)=>{
        return(
          <div className="detail">
            <h1>Detail page</h1>
            <img src={item.imageUrl} alt="Photo" style={{width:'50%',height:"400px"}} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}
