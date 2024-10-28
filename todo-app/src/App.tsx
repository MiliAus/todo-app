import { useState } from 'react';
import Title from './components/Title.tsx';
import './styles/Fonts.css';
import './styles/App.css';
import './styles/Table.css';

const initialRows = [{ id: '', value: 'Wow, so empty...you must be having a chill day.' }];


export default function App() {

  const [values, setValues] = useState('');
  const [rows, setRows] = useState(
    initialRows
  );
  
  function handleClick() {
    const newObj =  { id: generateUniqueId(), value:  values};
    setRows([...rows, newObj]);
    setValues('');
  };

  const generateUniqueId = () => {  
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, (c) => {  
          const r = Math.floor(Math.random() * 16);  
          return r.toString(16);  
    });  
  };
  function clearList () {
    console.clear();
    setRows([])
    setRows(() => initialRows);
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
          <button onClick={clearList} type="reset" className='clearbutton'>Clear</button>
          <h2 className='roboto-bold'>Tasks</h2>
          <table>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          
      </div>
    </>


  );
}