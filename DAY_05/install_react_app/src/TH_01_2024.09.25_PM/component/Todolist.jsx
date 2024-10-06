// import Todoitem from './Todoitem';
// import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';


// const handleChange = () => {
    
// }

// function ToDoList() {
//     return (
//         <div className='ToDoList' style={{marginLeft: '10px' }}>
//             <h1>My work 🎯</h1>
//             <div>
//                 <Todoitem title='Gửi email cho tôi' dueDate='today'></Todoitem>
//                 <Todoitem title='làm bài tập về nhà' dueDate='tomorow'></Todoitem>
//             </div>
//             <div style={{ marginTop: '5px' }}>
//                 <PlusCircleOutlined style={{ fontSize: '20px', color: '#d1453b' }} onClick = {handleChange} /> Add Task
//             </div>
//         </div>
//     );
// }

// export default ToDoList;

import React, { useState } from 'react';
import Todoitem from './Todoitem';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Học lập trình web với React', status: 'Tomorrow' },
    { id: 2, text: 'Gửi email nộp bài tập về nhà', status: 'Saturday' },
    { id: 3, text: 'Học từ vựng tiếng anh mỗi ngày', status: 'Monday' },
    { id: 4, text: 'Viết tiểu luận môn Triết học', status: 'Today' },
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTaskText, status: 'Todo' }]);
    setNewTaskText('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: task.status === 'Todo' ? 'Done' : 'Todo' } : task
      )
    );
  };

  return (
    <div>
      <h1>My work 🎯</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.status === 'Done'} onChange={() => handleToggleStatus(task.id)} />
            {task.text}
            <span>({task.status})</span>
            <button onClick={() => handleDeleteTask(task.id)}>Xóa</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Thêm task..."
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Thêm</button>
    </div>
  );
}

export default App;

