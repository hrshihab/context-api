import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Catergory from '../Category/Catergory';

const Home = () => {
  const [category,setCategory] = useContext(CategoryContext);
  return (
    <div>
      <h3>This is HOME : {category}</h3>
      <button onClick={()=>setCategory(category+1)}>Increase</button>
      <Catergory></Catergory>
    </div>
  );
};

export default Home;