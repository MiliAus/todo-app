import '../styles/Fonts.css';
import '../styles/Table.css';



export default function TableRow({value}) {


    function deleteItem(){
        console.log('hello')
    }
    return (
            <tr>
                <td className='userinputtd'>{value} </td>
                <td><button className='deletebutton' onClick={deleteItem}><span className='material-symbols-outlined'>delete</span></button></td>
            </tr>
    );
}