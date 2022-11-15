import { Dispatch, ReactElement, SetStateAction } from "react";

export interface FormValuesTypes {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
}

export interface FormSetupTypes {
  type: string;
  name: string;
  label: string;
}

export interface FormPropsTypes {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalContent: Dispatch<SetStateAction<ReactElement>>;
}
