import { Button } from '../Button/Button';
import { StyledModal } from './Successful.styled';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { ModalDescription } from '../ModalDescription/ModalDescription';
import { HintMessage } from '../HintMessage/HintMessage';
import { NextLink } from '../NextLink/NextLink';
import { HintDescription } from '../HintDescription/HintDescription';
import img from '../../images/display-picture.png';
import { Box } from '../Box/Box';
import IconProgress from '../../images/progress.svg';
import { useAppContext } from '../../context/state';

export const Successful = () => {
  const { setProgressCheck } = useAppContext();
  setProgressCheck(2);
  return (
    <StyledModal>
      <Box
        position="relative"
        width={80}
        height={80}
        backgroundImage={`url("${img.src}")`}
      >
        <Box position="absolute" top={0} right={0}>
          <img
            src={IconProgress.src}
            alt="Icon Check"
            width={24}
            height={24}
          />
        </Box>
      </Box>
      <ModalTitle>Store connected</ModalTitle>
      <ModalDescription>
        Chad is now able to manage customer support requests
        for [STORE-NAME].
      </ModalDescription>

      <Button type="button" route="../gmail">
        Continue
      </Button>
      <HintMessage>
        <HintDescription>Wrong store?</HintDescription>
        <NextLink path="./">Connect another one</NextLink>
      </HintMessage>
    </StyledModal>
  );
};
