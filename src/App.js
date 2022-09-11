import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();
function App() {
  const [category,setCategory]= useState(0);
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
      <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
    </CategoryContext.Provider>
    
  );
}

export default App;
