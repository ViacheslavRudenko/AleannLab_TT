import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomErrorMessage from "./Error/Error";
import { formArr, formdefaultValues, formSchema } from "./data";
import { FormValuesTypes } from "./types";
import styles from "./index.module.scss";

const Form = ({ setIsModalOpen, setModalContent }: any) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: formdefaultValues,
  });

  const actionWithForm = (values: FormValuesTypes) => {
    setModalContent(
      <div>
        <p className="text-center text-lg">{`${values.firstName}, thank you.`}</p>
        <p className="text-center text-lg">Our manager will contact you</p>
      </div>
    );
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit((values) => actionWithForm(values))}
      >
        <div>
          <ul className={styles.formList}>
            {formArr.map((formData) => (
              <ol key={formData.name} className={styles.listItem}>
                <Controller
                  name={formData.name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <label className={styles.label}>{formData.label}</label>
                      <input
                        className={styles.input}
                        type={formData.type}
                        value={value || ""}
                        name={formData.name}
                        onChange={onChange}
                      />
                      <CustomErrorMessage
                        err={errors[formData.name]?.message}
                      />
                    </>
                  )}
                />
              </ol>
            ))}
          </ul>
          <button type="submit" className={styles.btnSubmit}>
            Apply
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
