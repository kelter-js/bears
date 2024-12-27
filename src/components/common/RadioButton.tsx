import { FC } from "react";
import { RadioButtonProps } from "./types";
import { RadioLabel, RadioContainer } from "./index.styled";
import { useFormContext, Controller } from "react-hook-form";

export const RadioButton: FC<RadioButtonProps> = ({ name, title, value }) => {
  const { control } = useFormContext();

  return (
    <RadioContainer>
      <Controller
        control={control}
        name={name}
        render={({ field: { value: fieldValue, ...field } }) => (
          <RadioLabel isChecked={fieldValue === value}>
            <input
              type="radio"
              {...field}
              value={value}
              className="visually-hidden"
            />
            {title}
          </RadioLabel>
        )}
      />
    </RadioContainer>
  );
};
