import * as yup from "yup";

const addUser = yup.object({
    name : yup
    .string()
    .trim()
    .required("This filed is required !")
    .max(20, "Must be less than 20 chars")
    .min(3, "Must be more than 3 chars"),
    email : yup
    .string()
    .trim()
    .required("This filed is required !")
    .max(20, "Must be less than 20 chars")
    .min(3, "Must be more than 3 chars"),
    phone : yup
    .string()
    .trim()
    .required("This filed is required !")
    .max(20, "Must be less than 20 chars")
    .min(3, "Must be more than 3 chars"),
    role : yup
    .string()
    .required("Required !")
})

export { addUser };