import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formArr, formdefaultValues, formSchema } from "./data";
import { FormPropsTypes, FormValuesTypes } from "./types";
import styles from "./index.module.scss";
import CastomInput from "./Inputs/CastomInput";

const Form = ({ setIsModalOpen, setModalContent }: FormPropsTypes) => {
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
    console.log(values);
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
                    <CastomInput
                      onChange={onChange}
                      value={value}
                      errors={errors}
                      formData={formData}
                    />
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
