import type { ForgotpasswordInput } from '@/interfaces'
import { forgotpasswordValidationSchema } from '@/validation/auth.validation'
import { useFormik } from 'formik'

export default function useForgotpassword(): any {
  const { handleSubmit, handleChange, errors, values, touched } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: forgotpasswordValidationSchema,
    onSubmit: (values: ForgotpasswordInput) => {
      console.log(values)
    }
  })

  return {
    onSubmit: handleSubmit,
    onChange: handleChange,
    touched,
    errors,
    values
  }
}
