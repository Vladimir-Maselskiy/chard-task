import { Button } from '../Button/Button';
import { LogoInModal } from '../LogoInModal/LogoInModal';
import { StyledModal } from './WithoutGmail.styled';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { ModalDescription } from '../ModalDescription/ModalDescription';
import { HintMessage } from '../HintMessage/HintMessage';
import { NextLink } from '../NextLink/NextLink';
import { HintDescription } from '../HintDescription/HintDescription';
import Select from 'react-select';
import { selectStyles } from '../../styles/reactSelectStyles';

const options = [
  { value: 'easy', label: 'Easy' },
  { value: 'middle', label: 'Middle' },
  { value: 'hard', label: 'Hard' },
];

export const WithoutGmail = () => {
  return (
    <StyledModal>
      <LogoInModal />
      <ModalTitle>Don’t use Gmail?</ModalTitle>
      <ModalDescription>
        Chad Beta is currently only integrated with Gmail.
        We’ll send you an email when Chad becomes compatible
        with your support ticket platform.
      </ModalDescription>

      <Select
        name="category"
        options={options}
        isClearable
        isSearchable
        placeholder="Select platform"
        styles={selectStyles}
      />

      <Button
        type="button"
        route="./without-gmail/responce"
      >
        Submit
      </Button>
      <HintMessage>
        <HintDescription>
          Actually use Gmail?
        </HintDescription>
        <NextLink path="./gmail">Connect</NextLink>
      </HintMessage>
    </StyledModal>
  );
};
