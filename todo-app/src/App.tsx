import { useState } from 'react';
import Title from './components/Title.tsx';
import TableRow from './components/TableRow.tsx';
import './styles/Fonts.css';
import './styles/App.css';
import '../styles/Table.css';


export default function App() {
    let initialplaceholder = <i>Wow, so empty...you must be having a chill day.</i>
    
    const generateUniqueId = () => {  
      return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, (c) => {  
            const r = Math.floor(Math.random() * 16);  
            return r.toString(16);  
      });  
    }
    const initialValue = [
      {id: generateUniqueId, value: initialplaceholder}
    ];

    const [item, addItem] = useState(initialValue);
    const [count, addCount] = useState(0);
    

    function handleItem(e){
      e.preventDefault();
    

      const form = e.target;
      const formData = new FormData(form);

      const formJson = Object.fromEntries(formData.entries()).myInput.toString();
      

      let id = generateUniqueId();

      let row = (
      <tr key={item.id}>
                <td className='userinputtd'>{formJson}</td>
                <td><button className='deletebutton' onClick={() => {
                  addItem(item.filter(r => r.props.id.id !== item.props.id.id));
                }
                }><span className='material-symbols-outlined'>delete</span></button></td>
      </tr>
      );
    
    
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
