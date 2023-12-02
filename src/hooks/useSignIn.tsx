import { ISigninInput } from "@/interfaces/auth.interface";
import { signinValidationSchema } from "@/schemas/auth.schema";
import { useFormik } from "formik"

export default function useSignIn() {

    const { handleSubmit, handleChange, errors, values, touched} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: signinValidationSchema,
        onSubmit: (values: ISigninInput) => {
            console.log(values)
        }
    });

    return {
        onSubmit: handleSubmit,
        onChange: handleChange,
        touched: touched,
        errors: errors,
        values: values,
    }
}