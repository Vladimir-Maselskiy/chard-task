import { Box } from '../Box/Box';
import {
  StyledBackButton,
  StyledNextButton,
} from './NavButton.styled';

import IconChevronRight from '../../images/icon_chevron-right.svg';
import IconChevronLeft from '../../images/icon_chevron-left.svg';
import Image from 'next/image';

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
          <Image
            src={IconChevronLeft.src}
            alt="Icon Chevron Right"
            width={16}
            height={16}
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
          <Image
            src={IconChevronRight.src}
            alt="Icon Chevron Left"
            width={16}
            height={16}
          />
        </Box>
        <StyledNextButton>Next</StyledNextButton>
      </Box>
    </Box>
    // <StyledNextLink href={path}>{children}</StyledNextLink>
  );
};
