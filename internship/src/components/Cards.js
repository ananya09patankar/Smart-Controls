import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/img-2.png';
import img2 from '../images/img-3.jpg';
import img3 from '../images/img-9.jpg';
import img4 from '../images/img-4.jpg';
import img5 from '../images/img-8.jpg';



function Cards() {
  return (
    <div className='cards'>
      <h1>Product Features</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Mobile Apps'
              label='Technicals'
              path='/services'
            />
            <CardItem
              src={img2}
              text='MES Integrations'
              label='Core'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='Web Servers'
              label='Specialization'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Real Time Dashboard'
              label='Premium'
              path='/products'
            />
            <CardItem
              src={img5}
              text='Recipe Management'
              label='Experience'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Cards;