import { Box } from '../Box/Box';
import LogoIcon from '../../images/chad-logo.svg';

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
        <img src={LogoIcon.src} alt="Chad Logo" />
      </Box>
      <h3>Chad</h3>
    </Box>
  );
};
