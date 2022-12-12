import { GoogleButton } from '../GoogleButton/GoogleButton';
import { LogoInModal } from '../LogoInModal/LogoInModal';
import { StyledModal } from './GmailConnect.styled';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { ModalDescription } from '../ModalDescription/ModalDescription';
import { MobieProgressLine } from '../MobieProgressLine/MobieProgressLine';
import { HintMessage } from '../HintMessage/HintMessage';
import { NextLink } from '../NextLink/NextLink';
import { ShopifyPreferenceInfo } from '../ShopifyPreferenceInfo/ShopifyPreferenceInfo';
import { Box } from '../Box/Box';
import IconCheck from '../../images/icon-check-vector.svg';
import { useAppContext } from '../../context/state';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useMedia } from 'react-use';

export const GmailConnect = () => {
  const isMobie = useMedia('(max-width: 1023px)');
  const { data: session } = useSession();
  const { setStep } = useAppContext();
  setStep(3);
  return (
    <StyledModal>
      <LogoInModal />
      {isMobie && <MobieProgressLine />}
      <ModalTitle>
        Connect your customer support email
      </ModalTitle>
      <ModalDescription>
        Allows Chad to send automated responses on your
        behalf from your usual support mailbox
      </ModalDescription>
      <Box display="flex" alignItems="baseline">
        <Image
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
        <Image
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
        <Image
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

      <GoogleButton
        type="button"
        route="./chad-ready"
        session={session}
      >
        {!session
          ? 'Connect Gmail account'
          : 'Logout Gmail account'}
      </GoogleButton>

      {!session && (
        <HintMessage>
          <NextLink path="./without-gmail">
            I don’t use Gmail
          </NextLink>
        </HintMessage>
      )}
    </StyledModal>
  );
};
