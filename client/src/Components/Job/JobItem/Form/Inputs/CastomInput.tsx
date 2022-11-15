import CustomErrorMessage from "../Error/Error";
import styles from "../index.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CastomInpytTypes } from "./types";

const CastomInput = ({
  formData,
  value,
  onChange,
  errors,
}: CastomInpytTypes) => {
  return formData.name !== "tel" ? (
    <>
      <label className={styles.label}>{formData.label}</label>
      <input
        className={styles.input}
        type={formData.type}
        value={value || ""}
        name={formData.name}
        onChange={onChange}
      />
      <CustomErrorMessage err={errors[formData.name]?.message} />
    </>
  ) : (
    <>
      <PhoneInput
        inputStyle={{
          width: "100%",
          borderRadius: "0",
          height: "42px",
          border: "0.5px solid rgba(190, 190, 190, 0.7)",
        }}
        country="ua"
        autoFormat={true}
        value={value}
        onChange={onChange}
      />
      <CustomErrorMessage err={errors[formData.name]?.message} />
    </>
  );
};

export default CastomInput;
