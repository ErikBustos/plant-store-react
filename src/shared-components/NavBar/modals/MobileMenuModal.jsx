import SessionContext from "context/SessionContext";
import { useContext } from "react";

const MobileMenuModal = (props) => {
    const { onCartOpenClick } = props;
    const { username, signOut } = useContext(SessionContext);

    return <div className="bg-emerald-800 text-emerald-200 flex flex-col items-start pt-12 pr-12 pb-6 rounded-bl-lg shadow-md">
        <div className="px-8 py-4">
            <i className="mr-2 text-2xl fa-solid fa-user"></i>
            {username}
        </div>
        <button className="px-8 py-4"
            onClick={signOut}>
            <i className="mr-2 text-2xl fa-solid fa-arrow-right-from-bracket"></i>
            sign out
        </button>
        <button className="px-8 py-4"
            onClick={onCartOpenClick}>
            <i className="mr-2 text-2xl fa-solid fa-cart-shopping"></i>
            cart
        </button>

    </div>
};

export default MobileMenuModal;