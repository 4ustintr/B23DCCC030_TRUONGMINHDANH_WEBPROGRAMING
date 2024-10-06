import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './style.css'
import { useState } from 'react';

function ToDoItem(props) {

    return (
        <div className='ToDoItem'>
            <input type='CheckBox'></input>
            <div className='itemContent'>
                <h3>{props.title}</h3>
                <p>{props.dueDate}</p>
            </div>
            <div className='Action'>
                <EditOutlined />
                <DeleteOutlined />
            </div>
        </div>
    );
}

export default ToDoItem;