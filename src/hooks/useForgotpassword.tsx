import { IForgotpasswordInput } from "@/interfaces/auth.interface";
import { forgotpasswordValidationSchema } from "@/schemas/auth.schema";
import { useFormik } from "formik";

export default function useForgotpassword() {

    const { handleSubmit, handleChange, errors, values, touched} = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: forgotpasswordValidationSchema,
        onSubmit: (values: IForgotpasswordInput) => {
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