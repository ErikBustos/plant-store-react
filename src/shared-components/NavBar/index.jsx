import { useContext } from "react";
import SessionContext from "context/SessionContext";

const NavBar = () => {
    const { username } = useContext(SessionContext);

    return <nav className="bg-emerald-800 flex justify-center">
        <div className="w-full max-w-5xl flex items-center px-8 py-2 justify-between">
            <div className="text-2xl text-white font-playfair flex flex-col items-center">
                <img className="w-10" src="https://static-task-assets.react-formula.com/capstone_logo_light.png" />
                Rica's Plants
            </div>
            <div className="">
                <button className="text-emerald-200 flex items-center">
                    <i className="fa-solid fa-user text-xl"></i>
                    {username}
                </button>
            </div>
        </div>
    </nav>
};

export default NavBar;