import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { TextAreaProps } from "./types";
import { TextAreaContainer } from "./index.styled";

export const TextArea: FC<TextAreaProps> = ({
  name,
  placeholder,
  required,
}) => {
  const { control } = useFormContext();

  return (
    <TextAreaContainer>
      <Controller
        control={control}
        name={name}
        render={({ field: { value: fieldValue, ...field } }) => (
          <textarea {...field} placeholder={placeholder} required={required} />
        )}
      />
    </TextAreaContainer>
  );
};
