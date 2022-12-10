import { Button } from '../Button/Button';
import { LogoInModal } from '../LogoInModal/LogoInModal';
import { StyledModal } from './WithoutShopify.styled';
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

export const WithoutShopify = () => {
  return (
    <StyledModal>
      <LogoInModal />
      <ModalTitle>Don’t use Shopify?</ModalTitle>
      <ModalDescription>
        Chad Beta is currently only available on Shopify.
        We’ll send you an email when Chad becomes available
        on your platform.
      </ModalDescription>

      <Select
        name="category"
        options={options}
        isClearable
        isSearchable
        placeholder="Select platform"
        onChange={data => console.log('data', data?.label)}
        styles={selectStyles}
      />

      <Button type="button">Submit</Button>
      <HintMessage>
        <HintDescription>
          Actually use Shopify?
        </HintDescription>
        <NextLink path="./shopify">Connect</NextLink>
      </HintMessage>
    </StyledModal>
  );
};
