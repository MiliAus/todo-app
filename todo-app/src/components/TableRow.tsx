import '../styles/Fonts.css';
import '../styles/Table.css';
import { useState } from 'react';


export default function TableRow(props: any) {


    function deleteItem(){
        const id: number = props.id;
        const rows: [] = props.state.item
        const newRows = rows.filter(rows => rows.props.id !== id); 
        props.state.addItem(newRows);
        const newCount = rows.length;
        console.log(newCount)

        
      


        
    
    }

    return (
            <tr>
                <td className='userinputtd'>{props.value} </td>
                <td><button className='deletebutton' onClick={deleteItem}><span className='material-symbols-outlined'>delete</span></button></td>
            </tr>
    );
}