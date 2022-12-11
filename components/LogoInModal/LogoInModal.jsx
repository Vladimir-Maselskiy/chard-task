import { Box } from '../Box/Box';
import LogoIcon from '../../images/chad-logo.svg';
import Image from 'next/image';

export const LogoInModal = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      fontSize={24}
      fontWeight={700}
      lineHeight={1.33}
    >
      <Box display="flex" alignItems="center">
        <Image
          src={LogoIcon.src}
          alt="Chad Logo"
          width={28.42}
          height={23.43}
        />
      </Box>
      <h3>Chad</h3>
    </Box>
  );
};
