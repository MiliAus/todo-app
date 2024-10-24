import '../styles/Fonts.css';
import '../styles/Table.css';



export default function TableRow({value}) {

    return (
            <tr>
                <td>{value} </td>
                <button className='deletebutton' onClick={()=>{}}><span className='material-symbols-outlined'>delete</span></button>
            </tr>
    );
}