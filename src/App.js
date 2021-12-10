
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import axios from 'axios'
import Food from './components/Food';

function App() {
  
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false)
  
  const app_id = 'd29553c5'
  const app_key = 'a23b94af23959652261ca38208ac28bf'
  const url = 'https://api.edamam.com/api/food-database/v2/parser'
  
  const onSubmitHandler = (ingr) => {
    setLoading(true)
    axios.get(`${url}?app_id=${app_id}&app_key=${app_key}&ingr=${ingr}`)
    .then((response)=> {
      setLoading(false)
      setFoods(response.data.hints);
    }, (error) => {
      console.log(error);
      setLoading(false)
    });
  }
  
  const getData = () => {
    let data = foods.map((food, index) => {
      return <Food food ={food} key = {index}/>
    })
    
    if(data == ''){
      return <p>Found 0 Results. Try other ingredients.</p>
    }
    else{
      return data
    }
  }
  
  const loader = () => {
    return (<div class="lds-hourglass"></div>)
  }
  
  return (
    <div className="App">
     <h1>Food Api</h1>
     <Form onSubmit = {onSubmitHandler} />
     <br/>
     <h2>Foods</h2>
     
     {loading ? loader() : getData()}
     
    </div>
  );
}

export default App;
