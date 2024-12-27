import { FormProvider, useForm } from "react-hook-form";
import FieldsetHeader from "../common/FieldsetHeader";
import { RadioButton } from "../common/RadioButton";
import { Checkbox } from "../common/Checkbox";
import { FormValues } from "./types";
import Typography from "../common/Typography";
import * as S from "./FormOrder.styled";
import { TextField } from "../common/TextField";
import { Icon } from "../Icon";
import { TextArea } from "../common/TextArea";

const DEFAULT_VALUES = {
  type: "accessories",
  colors: {
    white: true,
    gray: true,
    tiffany: false,
    black: false,
    pink: false,
    orange: false,
  },
  firstName: "",
  lastName: "",
  surName: "",
  phoneNumber: "",
  email: "",
};

const COLORS = [
  { name: "white", label: "белый" },
  { name: "gray", label: "серый" },
  { name: "tiffany", label: "тиффани" },
  { name: "black", label: "черный" },
  { name: "pink", label: "розовый" },
  { name: "orange", label: "оранжевый" },
];

export const FormOrder = () => {
  const methods = useForm<FormValues>({ defaultValues: DEFAULT_VALUES });

  const {
    register,
    getValues,
    handleSubmit: onSubmit,
    formState: { errors },
  } = methods;

  console.log("getValues", getValues());

  const handleSubmit = (e: FormValues) => {
    console.log(e);
  };

  return (
    <S.Container>
      <Typography className="form-description">
        Мы будем рады воплотить в жизнь ваши пожелания! Заполните простую форму
        заказа и мы свяжемся с вами, чтобы уточнить детали.
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={onSubmit(handleSubmit)}>
          <div>
            <FieldsetHeader title="тип" />
            <S.TypeFieldset>
              <RadioButton
                name="type"
                title="Аксессуар для интерьера"
                value="accessories"
              />

              <RadioButton name="type" title="Детская игрушка" value="toy" />
            </S.TypeFieldset>

            <FieldsetHeader title="цвет" />

            <S.ColorFieldset>
              {COLORS.map(({ name, label }) => (
                <Checkbox key={name} name={`colors.${name}`} title={label} />
              ))}
            </S.ColorFieldset>

            <FieldsetHeader title="фио" />

            <S.MainInfoContainer>
              <TextField
                placeholder="Введите ваше имя*"
                name="firstName"
                title="Имя:"
                required
              />

              <TextField
                placeholder="Укажите фамилию*"
                name="lastName"
                title="Фамилия:"
                required
              />

              <TextField
                placeholder="Отчество, если желаете"
                name="surName"
                title="Отчество:"
              />
            </S.MainInfoContainer>

            <FieldsetHeader title="тел" />

            <S.CredentialsFieldContainer>
              <TextField
                placeholder="+7 ХХХ ХХХ ХХ ХХ*"
                name="phoneNumber"
                type="tel"
                required
                icon={
                  <Icon iconPath={`/icons/phone.svg`} className="phone-icon" />
                }
              />
            </S.CredentialsFieldContainer>

            <FieldsetHeader title="E-MAIL" />

            <S.CredentialsFieldContainer>
              <TextField
                placeholder="Ваш Email*"
                name="email"
                type="email"
                required
                icon={
                  <Icon iconPath={`/icons/mail.svg`} className="email-icon" />
                }
              />
            </S.CredentialsFieldContainer>

            <FieldsetHeader title="ДОП" />

            <S.FeedbackContainer>
              <TextArea
                name="feedback"
                placeholder="Опишите все ваши пожелания к заказу"
              />
            </S.FeedbackContainer>

            <Typography className="form-annotation">
              *Поля обязательны для заполнения
            </Typography>
          </div>

          <button className="create-order-btn" type="submit">
            ОТПРАВИТЬ ЗАКАЗ
          </button>
        </form>
      </FormProvider>
    </S.Container>
  );
};
