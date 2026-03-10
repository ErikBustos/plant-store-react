import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignUpPage = () => {
    return (
    <FormContainer>
        <AuthForm
            fields={[
                {
                    label: "username",
                    type: "text"
                },
                {
                    label: "password",
                    type: "password"
                },
                {
                    label: "confirm password",
                    type: "password"
                }
            ]}
            submitButtonLabel="create account"
        />
        <Link to="/" className="text-sm text-green-600">Sign in</Link>
    </FormContainer>
    );
};

export default SignUpPage;