import { Button } from '../Button/Button';
import { StyledModal } from './Responce.styled';
import { ModalTitle } from '../ModalTitle/ModalTitle';
import { ModalDescription } from '../ModalDescription/ModalDescription';
import { Box } from '../Box/Box';
import IconCheckMark from '../../images/check-mark.svg';
import Image from 'next/image';

export const Responce = ({ children }) => {
  return (
    <StyledModal>
      <Box display="flex" alignItems="center">
        <Image
          src={IconCheckMark.src}
          alt="Check Mark Logo"
          width={160}
          height={160}
        />
      </Box>
      <ModalTitle>Response received</ModalTitle>
      <ModalDescription>{children}</ModalDescription>

      <Button type="button" route="../">
        Done
      </Button>
    </StyledModal>
  );
};
