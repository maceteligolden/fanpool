export interface ISignUpInput {
    email: string;
    firstname: string;
    lastname: string;
    username: string;
    phone: string;
    password: string;
    otp?: string;
}

export interface ISigninInput {
    email: string;
    password: string;
}

export interface IForgotpasswordInput {
    email: string;
}

export interface IChangepasswordInput {
    password: string;
    confirmpassword: string;
}