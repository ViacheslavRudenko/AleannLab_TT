import { FormSetupTypes } from "../types";

export interface CastomInpytTypes {
  formData: FormSetupTypes;
  value: string;
  onChange: () => void;
  errors: any;
}
