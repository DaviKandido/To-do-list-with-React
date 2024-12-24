import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";


function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {

  const navigate = useNavigate()

  function onSeeDetailsClick(task){
    const query = new URLSearchParams() //boas Praticas por questão de segurança
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/task?${query.toString()}`)
  }
  
  return (
    <>
      <ul className="p-6 space-y-4 rounded-md shadow bg-slate-200">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
              <button className={`w-full p-2 text-left text-white rounded-md bg-slate-400 ${task.isCompleted && "line-through"}`} onClick={() => onTaskClick(task.id) } >{task.title} {task.isCompleted ? " 🆗" : ""} </button>
              <Button onClick={() => onSeeDetailsClick(task)}> 
                <ChevronRightIcon />
              </Button>
              <Button onClick={() => onDeleteTaskClick(task.id)}> 
                <Trash />
              </Button>
           </li>
        ))}
      </ul>
    </>
  );
}

export default Tasks;
