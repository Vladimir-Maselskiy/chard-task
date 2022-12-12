import { StyledGoogleButton } from './GoogleButton.styled';
import { useRouter } from 'next/router';
import { signIn, signOut } from 'next-auth/react';
import IconGoogle from '../../images/google-logo.svg';
import { Box } from '../Box/Box';
import Image from 'next/image';

export const GoogleButton = ({
  children,
  route,
  isSubmitting,
  session,
}) => {
  const router = useRouter();
  console.log('session', session);
  return (
    <Box position="relative" mt={32}>
      <StyledGoogleButton
        onClick={() => {
          if (session) {
            signOut();
          } else {
            signIn();
          }
        }}
        disabled={isSubmitting}
      >
        {children}
      </StyledGoogleButton>
      <Box
        display="flex"
        alignItems="center"
        position="absolute"
        top="2.75px"
        left="2.75px"
      >
        <Image
          src={IconGoogle.src}
          alt="Icon Chevron Right"
          width={48}
          height={48}
        />
      </Box>
    </Box>
  );
};
