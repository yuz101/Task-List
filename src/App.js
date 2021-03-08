import Header from './components/Header'
import './App.css';
import Task from './components/Task';
import {useState} from 'react'
import AddTask from './components/AddTask'

const App = () =>{
  const[tasklist, setTasks] = useState(
    [
        {
            id: 1,
            text:'Doctor Appointment',
            day: 'Feb 5th at 2:30pm',
        },
        {
            id: 2,
            text:'Meeting at School',
            day: 'Feb 6th at 1:30pm',
        },
        {
            id: 3,
            text:'Food Shopping',
            day: 'Feb 5th at 2:30pm',
        }
    
    ]
  )
const[showAdd, setShowAdd] = useState(false)
//Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 1000) +1
  const newTask = {id, ...task}
  setTasks([...tasklist, newTask])
}
//Delete Task
const deleteTask = (id) =>{
    setTasks(tasklist.filter((task) => task.id !== id))
}
  return (
    <div className="container">
      <Header title = "Task List" onAdd = {() => setShowAdd(!showAdd)}/>
      <Task tasklist = {tasklist} onDelete = {deleteTask}/>
      {showAdd && <AddTask onAdd = {addTask}/>}
    </div>
  );
}

export default App;

