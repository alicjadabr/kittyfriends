import React from 'react';
import './Card.css'

const Card = ({ name, email, id }) => {
  return (
    <div className='Card dib br3 pad3 ma2 grow bw2 shadow-5'>
      <img alt='kittens' src={`https://robohash.org/${id}?set=set4`} width={200} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;