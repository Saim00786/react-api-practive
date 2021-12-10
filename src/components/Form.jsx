import React, { useState } from 'react';
import './Form.css';

function Form({onSubmit}) {
  
  const [ingredient, setIngredient] = useState('');
  
  const changeHandler = (e) => {
    setIngredient(e.target.value);
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(ingredient)
  }
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Start typing...' className='form-control' onChange={changeHandler} value={ingredient}/>
        <input type="submit" value="Find" class='btn btn-primary'/>
      </form>
    </>
  );
}

export default Form;
