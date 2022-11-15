import { useState } from "react";
export interface FormValuesTypes {
  firstName: string;
  lastName: string;
  email: string;
  tel: number | null;
}

export interface FormSetupTypes {
  type: string;
  name: string;
  label: string;
}

export interface FormPropsTypes {
  setIsModalOpen: any;
  setModalContent: any;
}
