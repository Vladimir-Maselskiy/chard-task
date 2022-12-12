import { AppWrapper } from '../context/state';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

// import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps,
  session,
}) {
  return (
    <AppWrapper>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AppWrapper>
  );
}
