import React from 'react';
import { useState } from 'react';
import Title from './components/Title.tsx';
import Table from './components/Table.tsx';
import './styles/Fonts.css';
import './styles/App.css';


export default function App() {
  
    const [item, addItem] = useState('');
    function handleItem(e){
      e.preventDefault();
    

      const form = e.target;
      const formData = new FormData(form);

      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson); 
    }
  return (
    <>
      <div className='container'>
        <div>
          <Title value={"My Daily Tasks"}/>
        </div>
        <div>
          <form method='post' onSubmit={handleItem}>
          <label>
            <input name="myInput" className="myInput" defaultValue="Some initial value" />
          </label>
          <button type="submit" className='addbutton'>Add</button>
          </form>
          <h2 className='roboto-bold'>Tasks</h2>
          <Table value={"This is your first task for today"}/>
        </div>
          
      </div>
    </>


  );
}