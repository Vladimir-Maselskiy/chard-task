import { StyledButton } from './Button.styled';
import { useRouter } from 'next/router';
import { useAppContext } from '../../context/state';

export const Button = ({ children, route }) => {
  const router = useRouter();

  return (
    <StyledButton
      onClick={() => {
        router.push(`${route}`);
      }}
    >
      {children}
    </StyledButton>
  );
};
