import { ReactElement } from "react";

export interface ModalTypes {
  title: string;
  content: ReactElement;
  isModalOpen: boolean;
  setIsModalOpen: any;
}
