import { useState } from "react";

export const useInput = (defaultValue, validationFn) => {
  const [enteredValue, setenteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleInputChange = (event) => {
    setenteredValue(event.target.value);
    setDidEdit(false);
  };

  function handleInputBlur(identifier) {
    setDidEdit(true);
  }
  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
};
