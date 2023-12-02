import { IChangepasswordInput } from "@/interfaces/auth.interface";
import { changepasswordValidationSchema } from "@/schemas/auth.schema";
import { useFormik } from "formik";

export default function useChangepassword() {

    const { handleSubmit, handleChange, errors, values, touched} = useFormik({
        initialValues: {
            password: '',
            confirmpassword: ''
        },
        validationSchema: changepasswordValidationSchema,
        onSubmit: (values: IChangepasswordInput) => {
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