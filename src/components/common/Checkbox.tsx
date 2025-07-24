import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { CheckboxProps } from "./types";
import { CheckboxLabel, RadioContainer } from "./index.styled";

export const Checkbox: FC<CheckboxProps> = ({ name, title }) => {
  const { control } = useFormContext();

  return (
    <RadioContainer>
      <Controller
        control={control}
        name={name}
        render={({ field: { value: fieldValue, ...field } }) => (
          <CheckboxLabel isChecked={fieldValue}>
            <input type="checkbox" {...field} className="visually-hidden" />
            {title}
          </CheckboxLabel>
        )}
      />
    </RadioContainer>
  );
};
