import { Box } from '../Box/Box';
import {
  StyledBackButton,
  StyledNextButton,
} from './NavButton.styled';

import IconChevronRight from '../../images/icon_chevron-right.svg';
import IconChevronLeft from '../../images/icon_chevron-left.svg';

export const NavButton = ({ path, children }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width={364}
      mt={48}
    >
      <Box position="relative">
        <Box
          display="flex"
          alignItems="center"
          position="absolute"
          top="8.5px"
          left="10px"
        >
          <img
            src={IconChevronLeft.src}
            alt="Icon Chevron Right"
          />
        </Box>
        <StyledBackButton>Back</StyledBackButton>
      </Box>
      <Box position="relative">
        <Box
          display="flex"
          alignItems="center"
          position="absolute"
          top="8.5px"
          right="10px"
        >
          <img
            src={IconChevronRight.src}
            alt="Icon Chevron Left"
          />
        </Box>
        <StyledNextButton>Next</StyledNextButton>
      </Box>
    </Box>
    // <StyledNextLink href={path}>{children}</StyledNextLink>
  );
};
