import type { SignUpInput } from '@/interfaces'
import {
  signupOTPValidationSchema,
  signupValidationSchema
} from '@/validation/auth.validation'
import { useFormik } from 'formik'
import { useState } from 'react'

export default function useSignUp(): any {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<{
    type: 'error' | 'success' | null
    message: string
  }>({
    type: null,
    message: ''
  })

  const [showVerification, setShowVerification] = useState<boolean>(false)

  const { handleSubmit, handleChange, errors, values, touched } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      phone: '',
      email: '',
      password: ''
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values: SignUpInput) => {
      console.log(values)
      setShowVerification(true)
    }
  })

  const submitForm = useFormik({
    initialValues: {
      otp: ''
    },
    validationSchema: signupOTPValidationSchema,
    onSubmit: (value: { otp: string }) => {
      console.log({ ...values, otp: value.otp })
    }
  })

  return {
    status,
    showVerification,
    register: {
      onSubmit: handleSubmit,
      onChange: handleChange,
      touched,
      errors,
      values
    },
    otp: {
      onSubmit: submitForm.handleSubmit,
      onChange: submitForm.handleChange,
      touched: submitForm.touched,
      errors: submitForm.errors,
      values: submitForm.values
    }
  }
}
