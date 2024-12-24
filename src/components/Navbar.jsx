import { useNavigate } from "react-router-dom";
import imgNavbar from "../assets/images/TalkIcon.png"
function Navbar() {
  const navigate = useNavigate();

  function taskSimple(){
    const query = new URLSearchParams();
    query.set("title", "Titulo padrão")
    query.set("description", "Descrição padrão")
    navigate(`/task?${query.toString()}`)
  }

  return (
    <>
      <div className="w-screen m-2 h-14">
        <ul className="relative flex flex-row items-center justify-around">
          <li>
            <img src={imgNavbar} alt="logo-icon" className="h-14"/>
          </li>
          <li>
            <button onClick={() => navigate("/")} className="text-2xl font-bold text-slate-600">Home</button>
          </li>
          <li>
            <button onClick={() => taskSimple()} className="text-2xl font-bold text-slate-600">Tasks</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
