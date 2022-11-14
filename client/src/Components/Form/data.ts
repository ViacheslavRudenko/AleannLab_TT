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

export const formSchema = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(10)
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .required("Name is required."),
  lastName: yup
    .string()
    .min(2)
    .matches(/^[A-Za-z ]*$/, "Please enter valid last name")
    .max(10)
    .required("Last Name is required."),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Mail is required"),
  tel: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
});
