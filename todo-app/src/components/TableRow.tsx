import '../styles/Fonts.css';
import '../styles/Table.css';
import { useState } from 'react';


export default function TableRow(props: any) {


    function deleteItem(){
        const id: number = props.id;
        const list: [] = props.state.item
        const newList: [] = (list.filter(row => row.id !== id)); 
        props.state.addItem(newList);
        const newCount = props.state.addCount;
        console.log(newCount);
        
        
    }
    return (
            <tr>
                <td className='userinputtd'>{props.value} </td>
                <td><button className='deletebutton' onClick={deleteItem}><span className='material-symbols-outlined'>delete</span></button></td>
            </tr>
    );
}