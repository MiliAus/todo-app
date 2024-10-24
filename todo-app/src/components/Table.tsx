import '../styles/Fonts.css';
import '../styles/Table.css';


export default function Table({value}) {

    

    return (
        <table>
            <tr>
                <td>{value} </td>
                <span onClick={()=>{"remove(this)"}}className='material-symbols-outlined'>delete</span>
            </tr>
        </table>
    );
}