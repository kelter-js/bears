import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { TextFieldProps } from "./types";
import * as S from "./index.styled";

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
    <S.TextFieldContainer>
      <Controller
        control={control}
        name={name}
        render={({ field: { value: fieldValue, ...field } }) => (
          <S.TextFieldLabel hasIcon={Boolean(icon)}>
            {title && <S.TextFieldTitle>{title}</S.TextFieldTitle>}
            <input
              type={type}
              {...field}
              placeholder={placeholder}
              required={required}
            />
            {icon && icon}
          </S.TextFieldLabel>
        )}
      />
    </S.TextFieldContainer>
  );
};
