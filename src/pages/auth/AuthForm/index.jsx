import { useState } from "react";
import Field from "./Field"

const AuthForm = (props) => {
    const { fields, submitButtonLabel } = props;
    const [values, setValues] = useState(() => {
        const initialState = {};
        for (let field of fields) {
            initialState[field.label] = '';
        }
        return initialState;
    });

    return <form className="p-4 m-4 bg-white border rounded-lg border-slate-200 font-lato">
        {
            fields.map((field) =>
                <Field
                    key={field.label}
                    label={field.label}
                    type={field.type}
                    onChange={(e) => {
                        setValues({ ...values, [field.label]: e.target.value });
                    }} />
            )
        }
        <button className="w-full py-2 text-white rounded-lg bg-emerald-700">
            {submitButtonLabel}
        </button>
    </form>
};

export default AuthForm;