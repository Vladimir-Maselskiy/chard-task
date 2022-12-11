import { StyledButton } from './Button.styled';
import { useRouter } from 'next/router';

export const Button = ({
  children,
  route,
  isSubmitting,
}) => {
  const router = useRouter();

  return (
    <StyledButton
      onClick={() => {
        router.push(`${route}`);
      }}
      disabled={isSubmitting}
    >
      {children}
    </StyledButton>
  );
};
