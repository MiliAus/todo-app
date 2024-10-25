import '../styles/Fonts.css';
import '../styles/Table.css';




export default function TableRow(props) {

    
    function deleteItem(){
        console.log(props.id)
        
    }
    return (
            <tr>
                <td className='userinputtd'>{props.value} </td>
                <td><button className='deletebutton' onClick={deleteItem}><span className='material-symbols-outlined'>delete</span></button></td>
            </tr>
    );
}