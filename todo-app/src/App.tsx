import { useState } from 'react';
import Title from './components/Title.tsx';
import './styles/Fonts.css';
import './styles/App.css';
import './styles/Table.css';

const initialRows = [{ id: '', value: 'Wow, so empty...you must be having a chill day.' }];


export default function App() {

  const [values, setValues] = useState('');
  const [count, addCount] = useState(0);
  const [isActive, setActive] = useState(false);
  const [rows, setRows] = useState(
    initialRows
  );
  
  
  function handleClick() {
    setActive(true);
    const newObj =  { id: generateUniqueId(), value:  values};
      if (count === 0){
      setRows(rows.splice(0,1));
      setRows([...rows, newObj]);
      setValues('');
      addCount(count+1);
      } else{
      setRows([...rows, newObj]);
      setValues('');
      }
      
  };

  const generateUniqueId = () => {  
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, (c) => {  
          const r = Math.floor(Math.random() * 16);  
          return r.toString(16);  
    });  
  };
  function clearList () {
    setActive(false);
    console.clear();
    setRows([]);
    const initialRows = [{ id: '', value: 'Wow, so empty...you must be having a chill day.' }];
    setRows(initialRows);
    addCount(0);
  }
  

    
    
  return (
    <>
      <div className='container'>
        <div>
          <Title value={"My Daily Tasks"}/>
        </div>
        <div>
          <input value={values} className="myInput" placeholder="What is your first task?" onChange={e => setValues(e.target.value)} />
          <button onClick={handleClick} className='addbutton'>Add</button>
          <button onClick={clearList} className='clearbutton'>Clear</button>
          <h2 className='roboto-bold'>Tasks</h2>
          <table>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  <td className={isActive? 'userinputtd': ''}>{row.value}</td>
                  {isActive && <td><button className='deletebutton' onClick={() => setRows(rows.filter(r => r.id !== row.id))}><span className='material-symbols-outlined'>delete</span></button></td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          
      </div>
    </>


  );
}