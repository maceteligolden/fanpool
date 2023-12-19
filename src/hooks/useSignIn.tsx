import type { SigninInput } from '@/interfaces'
import { signinValidationSchema } from '@/validation/auth.validation'
import { useFormik } from 'formik'

export default function useSignIn(): any {
  const { handleSubmit, handleChange, errors, values, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: signinValidationSchema,
    onSubmit: (values: SigninInput) => {
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
