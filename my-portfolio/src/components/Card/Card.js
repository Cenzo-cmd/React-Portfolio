import React from 'react';

function Card({ website, src, text, info}) {

function handleClick(website) {
  return(
    window.open(website, "_blank")
  )
}
  return (
    <>
      <li className='cards-item'>
        <div className='cards-item-link' onClick={() => handleClick(website)}>
          <figure className='cards-item-pic-wrap'>
            <img
              className='cards-item-img'
              alt='Portfolio Projects'
              src={src}
            />
           
          </figure>
          <div className='cards-item-info'>
            <h5 className='cards-item-text'>{text}</h5>
            <p>{info}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
