import { Dispatch, ReactElement, SetStateAction } from "react";

export interface ModalTypes {
  title: string;
  content: ReactElement;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
