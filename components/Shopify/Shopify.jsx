import { Button } from '../Button/Button';
import { LogoInModal } from '../LogoInModal/LogoInModal';
import { StyledModal } from './Shopify.styled';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { ModalDescription } from '../ModalDescription/ModalDescription';
import { HintMessage } from '../HintMessage/HintMessage';
import { NextLink } from '../NextLink/NextLink';
import { ShopifyPreferenceInfo } from '../ShopifyPreferenceInfo/ShopifyPreferenceInfo';
import { Box } from '../Box/Box';
import IconCheck from '../../images/icon-check-vector.svg';

export const Shopify = () => {
  return (
    <StyledModal>
      <LogoInModal />
      <ModalTitle>Connect your Shopify store</ModalTitle>
      <ModalDescription>
        Installs the Chad widget in your Shopify store and
        sets it up to display your customers’ order
        information and self-serve options.
      </ModalDescription>
      <Box display="flex" alignItems="baseline">
        <img
          src={IconCheck.src}
          alt="Icon Check"
          width={10.67}
          height={7.33}
        />

        <ShopifyPreferenceInfo>
          <h4>Track orders and shipping</h4>
          <p>
            Global coverage with 600+ couriers supported
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
          <h4>Manage orders</h4>
          <p>
            Allow customers to track, return, exchange, or
            report problems with their orders
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
          <h4>Process returns and exchanges</h4>
          <p>
            Automatically checks your store policy and
            existing inventory before resolving or
            escalating each request
          </p>
        </ShopifyPreferenceInfo>
      </Box>

      <Button type="button">Connect store</Button>
      <HintMessage>
        <NextLink path="./without-shopify">
          I don’t use Shopify
        </NextLink>
      </HintMessage>
    </StyledModal>
  );
};
