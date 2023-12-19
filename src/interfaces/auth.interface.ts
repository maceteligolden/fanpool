export interface SignUpInput {
  email: string
  firstname: string
  lastname: string
  username: string
  phone: string
  password: string
  otp?: string
}

export interface SigninInput {
  email: string
  password: string
}

export interface ForgotpasswordInput {
  email: string
}

export interface ChangepasswordInput {
  password: string
  confirmpassword: string
}
