import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      clientId:
        '873158674546-nkrcveki9k46vlaoajqvlsv8jp46pdj0.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
});
