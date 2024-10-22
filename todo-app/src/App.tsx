import React from 'react';
import './styles/App.css';
import { useState } from 'react';
import Title from './components/Title.tsx';
import './styles/Fonts.css';


export default function App() {
  const [addItem, newItem] = useState();
    function handleItem (userInput:string) {
      let item = <p>{userInput}</p>
      newItem(startItem => startItem + item)
    };
    function handleSubmit(e) {
      e.preventDefault();
    

      const form = e.target;
      const formData = new FormData(form);

      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    };
  return (
    <>
      <div className='container'>
        <div><Title></Title></div>
        <div>
          <form method='post' onSubmit={handleSubmit}>
          <label>
            <input name="myInput" defaultValue="Some initial value" />
          </label>
          <button type="submit" className='addbutton'>Add</button>
          </form>
        </div>
          
      </div>
    </>


  );
}