import * as Yup from "yup";

export const singUpSchema = Yup.object({
   fname:Yup.string()
    .required("First Name is required")
    .matches(/^[a-zA-Z_ ]*$/,"No special chareters allowed")
    .min(2,"Name must be between 2 and 16 characters")
    .max(16,"Name must be between 2 and 16 characters"),
    lname:Yup.string()
    .required("Last name is required")
    .matches(/^[a-zA-Z_ ]*$/,"No special chareters allowed")
    .min(2,"Name must be between 2 and 16 characters")
    .max(16,"Name must be between 2 and 16 characters"),
    email:Yup.string()
    .required("Email address is required.")
    .email("Invalid email adress."),
    password: Yup.string().required("Password is required.")
    .min(6, 'Password must be at least 6 characters')
  
});


export const signInSchema = Yup.object({
    email: Yup.string()
        .required("Email is required.")
        .email("Invalid email adress."),
    password: Yup.string().required("Password is required.")
});
