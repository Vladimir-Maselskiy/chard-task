import { StyledNextLink } from './NextLink.styled';

export const NextLink = ({ path, children }) => {
  return (
    <StyledNextLink href={path}>{children}</StyledNextLink>
  );
};
