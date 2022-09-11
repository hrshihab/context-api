import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CatergoryDetails = () => {
  const [category,setCategory] = useContext(CategoryContext);
  return (
    <div>
      <h2>Category Details : {category} </h2>
      <button onClick={()=>setCategory(category - 1)}>Decrease</button>

    </div>
  );
};

export default CatergoryDetails;