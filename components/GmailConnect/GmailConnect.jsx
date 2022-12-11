import { Button } from '../Button/Button';
import { LogoInModal } from '../LogoInModal/LogoInModal';
import { StyledModal } from './GmailConnect.styled';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { ModalDescription } from '../ModalDescription/ModalDescription';
import { HintMessage } from '../HintMessage/HintMessage';
import { NextLink } from '../NextLink/NextLink';
import { ShopifyPreferenceInfo } from '../ShopifyPreferenceInfo/ShopifyPreferenceInfo';
import { Box } from '../Box/Box';
import IconCheck from '../../images/icon-check-vector.svg';
import { useAppContext } from '../../context/state';

export const GmailConnect = () => {
  const { setStep } = useAppContext();
  setStep(3);
  return (
    <StyledModal>
      <LogoInModal />
      <ModalTitle>
        Connect your customer support email
      </ModalTitle>
      <ModalDescription>
        Allows Chad to send automated responses on your
        behalf from your usual support mailbox
      </ModalDescription>
      <Box display="flex" alignItems="baseline">
        <img
          src={IconCheck.src}
          alt="Icon Check"
          width={10.67}
          height={7.33}
        />

        <ShopifyPreferenceInfo>
          <h4>Contextual responses</h4>
          <p>
            Custom responses to any support situation from
            “where’s my stuff?” to “I want a refund”
          </p>
        </ShopifyPreferenceInfo>
      </Box>
      <Box display="flex" alignItems="baseline" mt={16}>
        <img
          src={IconCheck.src}
          alt="Icon Check"
          width={10.67}
          height={7.33}
        />

        <ShopifyPreferenceInfo>
          <h4>Reply from anywhere</h4>
          <p>
            Respond to your customers via email or Chad
            chat—it’s all saved in the same thread
          </p>
        </ShopifyPreferenceInfo>
      </Box>
      <Box display="flex" alignItems="baseline" mt={16}>
        <img
          src={IconCheck.src}
          alt="Icon Check"
          width={10.67}
          height={7.33}
        />

        <ShopifyPreferenceInfo>
          <h4>Categorical inbox tags</h4>
          <p>
            Tags your emails by category so you know what to
            expect before even opening an email
          </p>
        </ShopifyPreferenceInfo>
      </Box>

      <Button type="button" route="./shopify/successful">
        Connect Gmail account
      </Button>
      <HintMessage>
        <NextLink path="./without-gmail">
          I don’t use Gmail
        </NextLink>
      </HintMessage>
    </StyledModal>
  );
};
