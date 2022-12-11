import { useAppContext } from '../../context/state';
import { useEffect } from 'react';
import { Formik } from 'formik';
import { Button } from '../Button/Button';
import { LogoInModal } from '../LogoInModal/LogoInModal';
import {
  Input,
  Label,
  StyledForm,
  StyledModal,
  StyledTbEyeOff,
} from './Wellcome.styled';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { ModalDescription } from '../ModalDescription/ModalDescription';
import { HintMessage } from '../HintMessage/HintMessage';
import { NextLink } from '../NextLink/NextLink';
import { HintDescription } from '../HintDescription/HintDescription';

export const Wellcome = () => {
  const { setStep, setProgressCheck, setBigCheckIndex } =
    useAppContext();

  useEffect(() => {
    setStep(1), setProgressCheck(0);
  }, [setStep, setProgressCheck]);

  const handleSubmit = async ({
    name,
    email,
    password,
  }) => {
    const params = {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        shop_token: null,
        google_token: null,
      }),
    };
    const data = await fetch(
      'https://vast-basin-98801.herokuapp.com/register',
      params
    );
  };

  const initialValues = {
    email: '',
    password: '',
    name: '',
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={480}
      padding="64px 40px"
      color="#134267"
      backgroundColor="#ffffff"
      borderRadius="8px"
      boxShadow="0px 5px 20px rgba(108, 117, 139, 0.2)"
    >
      <LogoInModal />
      <ModalTitle>Welcome to Chad</ModalTitle>
      <ModalDescription>
        Go live in 10 minutes! Our self-service widget
        empowers your customers to manage orders and track
        shipments 24/7 without driving you crazy.
      </ModalDescription>

      <Formik
        initialValues={initialValues}
        validate={values => {
          const validEmail =
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
              values.email
            );

          if (
            validEmail &&
            values.name &&
            values.password
          ) {
            setBigCheckIndex(0);
            setProgressCheck(1);
          } else {
            setBigCheckIndex(null);
            setProgressCheck(0);
          }
        }}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="megachad@trychad.com"
            type="email"
          />

          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Mega Chad"
          />
          <Label htmlFor="password">
            Password
            <Input
              id="password"
              name="password"
              placeholder="Enter password"
            />
            <StyledTbEyeOff size={16} />
          </Label>
          <Button type="submit" route="./shopify" step={1}>
            Submit
          </Button>
        </StyledForm>
      </Formik>
      <HintMessage>
        <HintDescription>
          Already have an account?
        </HintDescription>
        <NextLink path="./login"> Login</NextLink>
      </HintMessage>
    </Box>
  );
};
