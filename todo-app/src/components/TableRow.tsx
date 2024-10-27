import '../styles/Fonts.css';
import '../styles/Table.css';
import { useState } from 'react';


export default function TableRow(props: any) {
    

    function deleteItem(){
        const currRows: [] = props.state.item;
        
        console.log(currRows.length);
        
    
    }
    return (
            <tr>
                <td className='userinputtd'>{props.value}</td>
                <td><button className='deletebutton' onClick={deleteItem}><span className='material-symbols-outlined'>delete</span></button></td>
            </tr>
    );
}