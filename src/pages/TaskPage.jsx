import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import Navbar from "../components/Navbar";

function TasksPage() {

    const navigate = useNavigate();
    
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    

    return (
        <>
            <div>
                <Navbar/>
                <div className="flex justify-center w-screen h-screen p-6 bg-slate-500">
                    <div className="w-[500px] space-y-4">
                        <div className="relative flex justify-center">
                            <button className="absolute top-0 left-0 p-2 text-white rounded-md buttom-0 bg-slate-400" onClick={() => navigate(-1)}>
                                <ChevronLeftIcon/>  
                            </button>  
                            <Title>
                                Detalhes da Tarefa
                            </Title> 
                        </div>
                    
                        <div className="p-4 rounded-md bg-slate-200">
                            <h2 className="text-xl ont-bold text-slate-600">Tarefa: {title}</h2>
                            <p className="text-slate-600">Descrição: {description}</p>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
}

export default TasksPage