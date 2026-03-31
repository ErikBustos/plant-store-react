import { useState } from "react";
import Field from "./Field"

const AuthForm = (props) => {
    const { fields, submitButtonLabel, onSubmit } = props;
    const [values, setValues] = useState(() => {
        const initialState = {};
        for (let field of fields) {
            initialState[field.label] = '';
        }
        return initialState;
    });
    const [loading, setLoading] = useState(false);

    return <form className="p-4 m-4 bg-white border rounded-lg border-slate-200 font-lato"
        onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            await onSubmit(values);
            setLoading(false);
        }}
    >
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
        <button className="relative w-full py-2 text-white rounded-lg bg-emerald-700">
            {submitButtonLabel}
            {loading &&
                <div className="absolute top-0 right-4 flex items-center h-full">
                    <i className="fa-solid fa-spinner-third text-green-300 text-xl animate:spin"></i>
                </div>
            }
        </button>
    </form>
};

export default AuthForm;