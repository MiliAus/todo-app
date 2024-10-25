import { useState } from 'react';
import Title from './components/Title.tsx';
import TableRow from './components/Table.tsx';
import './styles/Fonts.css';
import './styles/App.css';


export default function App() {
    let initialValue = <i>Wow, so empty...you must be having a chill day.</i>
    const [item, addItem] = useState([initialValue]);
    const [count, addCount] = useState(0);
    

    function handleItem(e){
      e.preventDefault();
    

      const form = e.target;
      const formData = new FormData(form);

      const formJson = Object.fromEntries(formData.entries()).myInput.toString();
      
      let row = <TableRow value={formJson} />

      if (count === 0){
        addItem([row])
        addCount(count+1);
        console.log(count)
      }
      else{
        console.log(count)
        addItem(prevCount => [row, ...prevCount])
      }
      

      
    }
    function clearList () {
      addItem([])
      addItem(() => [initialValue]);
      addCount(0)


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
            <input name="myInput" className="myInput" placeholder="What is your first task?" />
          </label>
          <button type="submit" className='addbutton'>Add</button>
          <button onClick={clearList} type="reset" className='clearbutton'>Clear</button>
          </form>
          <h2 className='roboto-bold'>Tasks</h2>
          <table>
            <tbody>
              {item}
            </tbody>
          </table>
        </div>
          
      </div>
    </>


  );
}
