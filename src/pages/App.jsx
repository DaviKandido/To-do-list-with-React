import AddTasks from "../components/AddTasks";
import Navbar from "../components/Navbar";
import Tasks from "../components/Tasks";
import { useEffect, useState } from "react";
import {v4} from "uuid"
import Title from "../components/Title";

function App(){

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] ); // Se não tiver nada coloca uma lista vazia

  // { 
  //   id: 1,
  //   title: "Estudar HTML",
  //   description: "Estudar HTML  com React",
  //   isCompleted: false
  // },
  // { 
  //   id: 2,
  //   title: "Estudar SCSS",
  //   description: "Estudar SCSS com Tailwind",
  //   isCompleted: false
  // },
  // { 
  //   id: 4,
  //   title: "Estudar JS e TS",
  //   description: "Estudar JS com React",
  //   isCompleted: false
  // },
  // { 
  //   id: 3,
  //   title: "Estudar React",
  //   description: "Estudar React com Vite",
  //   isCompleted: false
  // }

  function onTaskClick(TaskId){
    
    const newTask = tasks.map(task => {
      //Preciso atualizar essa tarefa
      if(task.id === TaskId){
        return {...task, isCompleted: !task.isCompleted}
      }

      //Preciso retornar a tarefa sem alteração
      return task
    })

    
    setTasks(newTask)
  }

  
  function onDeleteTaskClick(taskId){
    
    const newTask = tasks.filter(task => taskId != task.id)

    setTasks(newTask)
  }

  function onAddTaskSubimit(title, description){

    // tasks.push({
    //   id: tasks.length + 1,
    //   title: this.title,
    //   description: this.description,
    //   isCompleted: false
    // })

    // setTasks(tasks)
    if(!title.trim() || !description.trim()){
      return alert("Por favor, preencha todos os campos")
    }

    const newTask = { 
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    }

    setTasks([...tasks, newTask]) //Tudo que já havia mais o novo
    
    
  }

  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])


  // useEffect(() => async() => {
  //   // Chama a API
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',{
  //     method: 'GET'
      
  //   })
  //   const data = await response.json()
  //   setTasks(data)

  //   //Pegar os dados que ela retorna


  //   //Armazenar/Persistir os dados no State
  // }, [])
  
  
  return (
    <>
    <div>  
      <Navbar />
      <div className="flex justify-center w-screen h-screen p-6 bg-slate-500">
        <div className="w-[500px] space-y-4">
          <Title>Gerenciador de Tarefas</Title>
          <AddTasks onAddTaskSubimit={onAddTaskSubimit}/>
          <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App