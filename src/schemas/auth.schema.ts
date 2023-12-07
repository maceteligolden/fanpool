import * as yup from "yup";

export const signupValidationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  firstname: yup
    .string()
    .required("FirstName is required"),
  lastname: yup
    .string()
    .required("LastName is required"),
  username: yup
    .string()
    .required("UserName is required"),
  phone: yup
    .string()
    .required("Phone is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const signupOTPValidationSchema = yup.object({
    otp: yup
      .string()
      .required("OTP is required"),
});

export const signinValidationSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
});

export const changepasswordValidationSchema = yup.object({
    password: yup
        .string()
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    confirmpassword: yup
        .string()
        .required("Password is required"),
});

export const forgotpasswordValidationSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
});