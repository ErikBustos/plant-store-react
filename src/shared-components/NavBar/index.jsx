import { useContext, useState } from "react";
import SessionContext from "context/SessionContext";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";

const NavBar = () => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const { username, signOut } = useContext(SessionContext);

    return (<>
        <nav className="bg-emerald-800 flex justify-center"
            onMouseLeave={() => setUserMenuOpen(false)}>
            <div className="w-full max-w-5xl flex items-center px-8 py-2 justify-between">
                <Link to="/plants">
                    <div className="text-2xl text-white font-playfair flex flex-col items-center">
                        <img className="w-10" src="https://static-task-assets.react-formula.com/capstone_logo_light.png" />
                        Rica's Plants
                    </div>
                </Link>
                <div className="relative flex justify-end flex-1">
                    <div className="relative min-w-32">
                        <button className="text-emerald-200 flex items-center"
                            onClick={() => setUserMenuOpen(true)}>
                            <i className="fa-solid fa-user text-xl"></i>
                            {username}
                        </button>
                        {
                            userMenuOpen && <div className="absolute mt-20 left-0 bg-white bottom-[-46px] rounded-md shadow-md">
                                <button className="px-4 py-2 text-slate-500 hover:text-emerald-700"
                                onClick={signOut}>
                                    <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                                    Sign Out
                                </button>
                            </div>
                        }
                    </div>
                    <button className="text-emerald-200 flex items-center"
                        onClick={()=> setCartOpen(true)}
                    >
                        <i className="fa-solid fa-cart-shopping mr-2 text-xl"></i>
                        cart
                    </button>
                </div>
            </div>
        </nav>
        {
            cartOpen && <CartModal setCartOpen={setCartOpen} />
        }
    </>
    );
};

export default NavBar;