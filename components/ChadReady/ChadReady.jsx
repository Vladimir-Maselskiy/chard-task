import {
  StyledModal,
  StyledBoldText,
  StyledDecription,
} from './ChadReady.styled';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { ModalDescription } from '../ModalDescription/ModalDescription';
import { ShopifyPreferenceInfo } from '../ShopifyPreferenceInfo/ShopifyPreferenceInfo';
import { Box } from '../Box/Box';
import IconCheck from '../../images/icon-check-vector.svg';
import { useAppContext } from '../../context/state';
import Image from 'next/image';
import { useEffect } from 'react';
import { Button } from '../Button/Button';

export const ChadReady = () => {
  const { user } = useAppContext();

  return (
    <StyledModal>
      <ModalTitle>{user}</ModalTitle>
      <ModalTitle>You’re ready to go! 🚀</ModalTitle>

      <StyledDecription>
        A fully loaded self-service portal is now ready to
        deploy on your Shopify store.
      </StyledDecription>
      <StyledDecription>
        We’ve programmed it to follow industry best
        practices for shipping, return & exchange, and
        payment policy.
      </StyledDecription>
      <StyledDecription>
        You can customize these settings to fit your store
        policy anytime.
      </StyledDecription>
      <StyledDecription>
        Lastly,
        <StyledBoldText>
          nothing is live until you hit “Go Live”!
        </StyledBoldText>
      </StyledDecription>

      <Button type="submit" route="./" step={1}>
        Start customizing
      </Button>
    </StyledModal>
  );
};
