import * as yup from "yup";
import { FormSetupTypes, FormValuesTypes } from "./types";

export const formArr: FormSetupTypes[] = [
  { type: "input", name: "firstName", label: "Name" },
  { type: "input", name: "lastName", label: "Last-name" },
  { type: "input", name: "email", label: "Email" },
  { type: "input", name: "tel", label: "Phone number" },
];

export const formdefaultValues: any = {
  firstName: "",
  lastName: "",
  email: "",
  tel: null,
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const formSchema = yup.object({
  firstName: yup
    .string()
    .required("Name is required.")
    .min(2)
    .max(10)
    .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
  lastName: yup
    .string()
    .required("Last Name is required.")
    .min(2)
    .matches(/^[A-Za-z ]*$/, "Please enter valid last name")
    .max(10),
  email: yup
    .string()
    .required("Mail is required")
    .email("Invalid email format"),
  tel: yup
    .string()
    .required("A phone number is required")
    .min(12, "A phone number is not valid")
    .typeError("A phone number is required"),
});
