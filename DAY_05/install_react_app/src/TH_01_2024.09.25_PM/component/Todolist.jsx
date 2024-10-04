
import Todoitem from './Todoitem';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';


const handleChange = () => {
    
}

function ToDoList() {
    return (
        <div className='ToDoList' style={{marginLeft: '10px' }}>
            <h1>My work 🎯</h1>
            <div>
                <Todoitem title='Gửi email cho tôi' dueDate='today'></Todoitem>
                <Todoitem title='làm bài tập về nhà' dueDate='tomorow'></Todoitem>
            </div>
            <div style={{ marginTop: '5px' }}>
                <PlusCircleOutlined style={{ fontSize: '20px', color: '#d1453b' }} onClick = {handleChange} /> Add Task
            </div>
        </div>
    );
}

export default ToDoList;