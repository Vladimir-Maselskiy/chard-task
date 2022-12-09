import { Formik, ErrorMessage, Form, Field } from 'formik';
import { Button } from '../Button/Button';
import { LogoInModal } from '../LogoInModal/LogoInModal';
import { StyledModal } from './Shopify.styled';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { ModalDescription } from '../ModalDescription/ModalDescription';
import { HintMessage } from '../HintMessage/HintMessage';
import { NextLink } from '../NextLink/NextLink';
import { HintDescription } from '../HintDescription/HintDescription';

export const Shopify = ({ step = 1 }) => {
  const handleSubmit = evt => {};

  return (
    <StyledModal>
      <LogoInModal />
      <ModalTitle>Connect your Shopify store</ModalTitle>
      <ModalDescription>
        Installs the Chad widget in your Shopify store and
        sets it up to display your customers’ order
        information and self-serve options.
      </ModalDescription>
      <Button type="button">Connect store</Button>

      <HintMessage>
        <NextLink> I don’t use Shopify</NextLink>
      </HintMessage>
    </StyledModal>
  );
};
