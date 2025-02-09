import * as yup from "yup";

const articleShema = yup.object({
    title : yup
    .string()
    .trim()
    .required("This filed is required !"),
    description : yup
    .string()
    .trim()
    .required("This filed is required !"),
    author : yup
    .string()
    .trim()
    .required("This filed is required !"),
    category : yup
    .string()
    .required("Required !"),
    imgSrc : yup
    .string()
    .required("Set an image link"),
    duration : yup
    .string()
    .required("This filed is required !"),
})

export { articleShema }
