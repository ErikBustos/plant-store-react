import {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from "services/user";

const SignInPage = () => {
    const [error, setError] = useState("");
    const location = useLocation();
    
    return (
    <FormContainer>
        <div className="text-red-700 font-lato">{error}</div>
        {location.state?.accountCreated && <div className="p-4 mt-2 mb-8 bg-green-200 border rounded-lg border-emerald-500 text-emerald-700">
                Account created successfully. Please sign in.
            </div>
        }
        <AuthForm
            fields={[
                {
                    label: "username",
                    type: "text"
                },
                {
                    label: "password",
                    type: "password"
                }
            ]}
            submitButtonLabel="sign in"
            onSubmit={async (values) => {
                const response = await userService.createSession({
                    username: values.username,
                    password: values.password
                });

                if(response.status === 201) {
                    setError("")
                } else {
                    const data = await response.json();
                    setError(data.error);
                }
            }}
        />
        <Link to="/sign-up" className="text-sm text-green-600">Create an account</Link>
    </FormContainer>
    );
};

export default SignInPage;