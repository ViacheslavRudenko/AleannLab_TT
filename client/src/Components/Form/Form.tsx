import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomErrorMessage from "./Error/Error";
import { formArr, formdefaultValues, formSchema } from "./data";
import { FormValuesTypes } from "./types";

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
      <form onSubmit={handleSubmit((values) => actionWithForm(values))}>
        <div>
          <ul className="grid gap-2 py-5">
            {formArr.map((formData) => (
              <ol key={formData.name} className="grid">
                <Controller
                  name={formData.name}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <label className="bg-white z-10 -mb-3 ml-2 px-2 w-fit">
                        {formData.label}
                      </label>
                      <input
                        className="border py-2 px-5 w-full"
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
          <button
            type="submit"
            className="px-10 py-5 bg-gray-100 rounded-md  block mx-auto"
          >
            Apply
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
