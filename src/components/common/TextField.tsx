import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { TextFieldProps } from "./types";
import { TextFieldLabel, TextFieldContainer } from "./index.styled";

export const TextField: FC<TextFieldProps> = ({
  name,
  title,
  icon,
  placeholder,
  required,
  type = "text",
}) => {
  const { control } = useFormContext();

  return (
    <TextFieldContainer>
      <Controller
        control={control}
        name={name}
        render={({ field: { value: fieldValue, ...field } }) => (
          <TextFieldLabel hasIcon={Boolean(icon)}>
            {title && title}
            <input
              type={type}
              {...field}
              placeholder={placeholder}
              required={required}
            />
            {icon && icon}
          </TextFieldLabel>
        )}
      />
    </TextFieldContainer>
  );
};
