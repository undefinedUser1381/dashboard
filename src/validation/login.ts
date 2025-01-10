import * as yup from "yup";

const loginSchema = yup.object({
    userName: yup
        .string()
        .trim()
        .required("this field is required")
        .min(3 , "username must have more than 3 chars"),
    email: yup
        .string()
        .trim()
        .required("this field is required")
        .email("write email correctly")
        .min(10, "must be more than 10")
        .max(30, "must be less than 30"),
});

export { loginSchema };