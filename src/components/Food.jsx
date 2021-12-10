import React from 'react';
import './Food.css'
import NA from '../assets/not-available-img.png'


function Food(props) {
  
  const food = props.food.food
  
  const getImage = () => {
    let img = (food.image) ? food.image : NA
    
    console.log(img);
    return img;
  }
  
  return (
    <div className='food'>
      <div className="img-container">
        <img src={getImage()} alt="" className='img' />
      </div>
      <div className="details">
        
        <h3>Name: {food.label}</h3>
        <h3>Category: {food.category}</h3>
        <h3>Nutrients: </h3>
        <p>CHOCDF: {food.nutrients['CHOCDF']}</p>
        <p>ENERC_KCAL: {food.nutrients['ENERC_KCAL']}</p>
        <p>FAT: {food.nutrients['FAT']}</p>
        <p>FIBTG: {food.nutrients['FIBTG']}</p>
        <p>PROCNT: {food.nutrients['PROCNT']}</p>
        <button>Open</button>
      </div>
    </div>
  );
}

export default Food;
