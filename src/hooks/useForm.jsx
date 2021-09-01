import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);
  const handleInputChange = ({ target }) => {
    if (target.files) {
      setFormValues({
        ...formValues,
        [target.name]: target.files,
      });
    } else {
      setFormValues({
        ...formValues,
        [target.name]: target.value,
      });
    }
  };
  return [formValues, handleInputChange];
};
