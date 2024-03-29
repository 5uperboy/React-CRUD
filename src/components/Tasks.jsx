import Task from './Task'

/* eslint-disable react/prop-types */
const Tasks = ({ tasks, onDelete, onToggle }) => {
  
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>
      ))}
    </>
  );
};

export default Tasks;
