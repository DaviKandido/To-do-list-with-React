import  Input  from "./Input";
import { useState } from "react";

function AddTasks({onAddTaskSubimit}){


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function clearInput(){
        setTitle("")    
        setDescription("")
    }
    
    return(
        <>
            <div className="flex flex-col p-6 space-y-4 rounded-md shadow bg-slate-200">
                <Input 
                    type="text" 
                    placeholder="Digite o título da tarefa" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input 
                    type="text" 
                    placeholder="Digite a descrição da tarefa" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" className="px-4 py-2 font-medium text-white rounded-md bg-slate-500" onClick={() => {onAddTaskSubimit(title, description); clearInput()}}>  Adicionar </button>
            </div>
        </>
    )
}

export default AddTasks