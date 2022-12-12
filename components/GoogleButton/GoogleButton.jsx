import { StyledGoogleButton } from './GoogleButton.styled';
import { useRouter } from 'next/router';
import { signIn, signOut } from 'next-auth/react';
import IconGoogle from '../../images/google-logo.svg';
import { Box } from '../Box/Box';
import Image from 'next/image';
import { useEffect } from 'react';
import { useAppContext } from '../../context/state';

export const GoogleButton = ({
  children,
  route,
  isSubmitting,
  session,
}) => {
  const router = useRouter();
  const { step, progressCheck, user, setUser } =
    useAppContext();

  useEffect(() => {
    if (session) {
      setUser(session.user);
      signOut();
      router.push(`${route}`);
    }
  }, [session, setUser, route, router]);

  return (
    <Box position="relative" mt={32}>
      <StyledGoogleButton
        onClick={() => {
          router.push(`${route}`);
          return;

          //this code is working on localhost:3000, but git has error with google auth
          if (session) {
            signOut();
          } else {
            localStorage.setItem(
              'user',
              JSON.stringify({
                step,
                progressCheck,
                user,
              })
            );
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
        top="3px"
        left="3px"
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
