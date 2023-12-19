import type { ChangepasswordInput } from '@/interfaces'
import { changepasswordValidationSchema } from '@/validation/auth.validation'
import { useFormik } from 'formik'

export default function useChangepassword(): any {
  const { handleSubmit, handleChange, errors, values, touched } = useFormik({
    initialValues: {
      password: '',
      confirmpassword: ''
    },
    validationSchema: changepasswordValidationSchema,
    onSubmit: (values: ChangepasswordInput) => {
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
