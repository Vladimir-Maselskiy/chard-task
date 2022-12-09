import { StyledNextLink } from './NextLink.styled';

export const NextLink = ({ children }) => {
  return (
    <StyledNextLink href={'./login'}>
      {children}
    </StyledNextLink>
  );
};
