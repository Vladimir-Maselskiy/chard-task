import { Formik, ErrorMessage } from 'formik';
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
import { useAppContext } from '../../context/state';

export const Wellcome = () => {
  const { step, setStep, progressCheck, setProgressCheck } =
    useAppContext();
  setStep(1), setProgressCheck(0);

  const handleSubmit = evt => {
    console.log('evt.target', evt);
  };
  const initialValues = {
    email: '',
    password: '',
    name: '',
  };

  return (
    <StyledModal>
      <LogoInModal />
      <ModalTitle>Welcome to Chad</ModalTitle>
      <ModalDescription>
        Go live in 10 minutes! Our self-service widget
        empowers your customers to manage orders and track
        shipments 24/7 without driving you crazy.
      </ModalDescription>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}

        // validationSchema={schema.register}
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
    </StyledModal>
  );
};
