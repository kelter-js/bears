import { FormProvider, useForm } from "react-hook-form";

import { useGetResolution } from "../../hooks/useGetResolutions";

import { AdaptiveWrapper } from "../common/AdaptiveWrapper";
import { FieldsetHeader } from "../common/FieldsetHeader";
import { COLORS, DEFAULT_VALUES } from "./constants";
import { Typography } from "../common/Typography";
import { TextField } from "../common/TextField";
import { RadioButton } from "../common/RadioButton";
import { PhoneIcon } from "../common/PhoneIcon";
import { MessageIcon } from "../common/MessageIcon";
import { TextArea } from "../common/TextArea";
import { Checkbox } from "../common/Checkbox";
import { Button } from "../common/Button";

import { FormValues } from "./types";
import * as S from "./FormOrder.styled";

export const FormOrder = () => {
  const methods = useForm<FormValues>({ defaultValues: DEFAULT_VALUES });

  const { handleSubmit: onSubmit } = methods;

  const handleSubmit = (e: FormValues) => console.log(e);

  const { desktop } = useGetResolution();

  return (
    <S.Container>
      <Typography className="form-description">
        Мы будем рады воплотить в жизнь ваши пожелания! Заполните простую форму
        заказа и мы свяжемся с вами, чтобы уточнить детали.
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={onSubmit(handleSubmit)}>
          <div>
            <S.FieldSetContainer gap={desktop ? 63 : 132}>
              <FieldsetHeader title="тип" />
              <S.TypeFieldset>
                <RadioButton
                  name="type"
                  title="Аксессуар для интерьера"
                  value="accessories"
                />

                <RadioButton name="type" title="Детская игрушка" value="toy" />
              </S.TypeFieldset>
            </S.FieldSetContainer>

            <S.FieldSetContainer
              gap={desktop ? 55 : 122}
              accented={desktop ? 228 : 304}
            >
              <FieldsetHeader title="цвет" />

              <S.ColorFieldset>
                {COLORS.map(({ name, label }) => (
                  <Checkbox key={name} name={`colors.${name}`} title={label} />
                ))}
              </S.ColorFieldset>
            </S.FieldSetContainer>

            <S.FieldSetContainer gap={desktop ? 60 : 123}>
              <FieldsetHeader title="фио" customPosition={11} />

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
            </S.FieldSetContainer>

            <S.FieldSetContainer gap={desktop ? 76 : 105} accented={228}>
              <S.ContactsContainer>
                <S.ContactsHolder>
                  <FieldsetHeader title="тел" />

                  <S.CredentialsFieldContainer>
                    <TextField
                      placeholder="+7 ХХХ ХХХ ХХ ХХ*"
                      name="phoneNumber"
                      type="tel"
                      required
                      icon={<PhoneIcon className="phone-icon" />}
                    />
                  </S.CredentialsFieldContainer>
                </S.ContactsHolder>

                <S.ContactsHolder>
                  <FieldsetHeader title="E-MAIL" />

                  <S.CredentialsFieldContainer>
                    <TextField
                      placeholder="Ваш Email*"
                      name="email"
                      type="email"
                      required
                      icon={<MessageIcon className="email-icon" />}
                    />
                  </S.CredentialsFieldContainer>
                </S.ContactsHolder>
              </S.ContactsContainer>
            </S.FieldSetContainer>

            <S.FieldSetContainer gap={desktop ? 61 : 125}>
              <FieldsetHeader title="ДОП" />
              <S.FeedbackContainer>
                <TextArea
                  name="feedback"
                  placeholder="Опишите все ваши пожелания к заказу"
                />
              </S.FeedbackContainer>
            </S.FieldSetContainer>

            <AdaptiveWrapper isMobile>
              <Typography className="form-annotation">
                *Поля обязательны для заполнения
              </Typography>
            </AdaptiveWrapper>
          </div>

          <AdaptiveWrapper isTablet isDesktop>
            <S.SubmitContainer>
              <Typography className="form-annotation">
                *Поля обязательны для заполнения
              </Typography>

              <Button className="create-order-btn" type="submit">
                ОТПРАВИТЬ ЗАКАЗ
              </Button>
            </S.SubmitContainer>
          </AdaptiveWrapper>

          <AdaptiveWrapper isMobile>
            <Button className="create-order-btn" type="submit">
              ОТПРАВИТЬ ЗАКАЗ
            </Button>
          </AdaptiveWrapper>
        </form>
      </FormProvider>
    </S.Container>
  );
};
