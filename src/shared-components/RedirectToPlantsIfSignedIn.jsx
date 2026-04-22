import SessionContext from "context/SessionContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToPlantsIfSignedIn = (props) => {
    const {username} = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(username !== null) {
            navigate("/plants");
        }
    }, [username]);

    return props.children;
}

export default RedirectToPlantsIfSignedIn;