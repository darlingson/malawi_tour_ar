import '../App.css';
import { useNavigate } from "react-router-dom";
const Home = () =>{
    const navigate = useNavigate();
    return(
        <>
        <div className="text-3xl font-bold underline text-red-600">
            <button
                onClick={() => navigate("/ar")}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >AR
            </button>
        </div>
        </>
    );
}
export default Home;