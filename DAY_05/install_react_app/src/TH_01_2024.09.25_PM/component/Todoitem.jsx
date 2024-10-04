import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './style.css'
import { useState } from 'react';

function ToDoItem(props) {

    const [isDelete, setIsDelete] = useState({
        Title: 'Gửi Email cho tôi', dueDate: 'today',
        Titile: 'Làm bài tập về nhà', dueDate: 'tomorow',
    });

    const handleClick = (index) => {
          const newItems = [...items];
          newItems.splice(index);
          setItems(newItems);
        }

    return (
        <div className='ToDoItem'>
            <input type='CheckBox'></input>
            <div className='itemContent'>
                <ul>
                {items.map((item, index) => (
                    <><li>{props.title}</li><li>{props.dueDate}</li></>
                    ))}      
                </ul>
            </div>
            <div className='Action'>
                <EditOutlined />
                <DeleteOutlined onClick={() => handleClick(index)} />
            </div>
        </div>
    );
}

export default ToDoItem;