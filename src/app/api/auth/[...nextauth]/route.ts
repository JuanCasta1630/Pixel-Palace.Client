import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
        name: { label: "name", type: "text", placeholder: "test@test.com" },
        lastName: { label: "lastname", type: "text", placeholder: "test" },
        username: { label: "username", type: "text", placeholder: "test" },
        birthday: { label: "birthday", type: "date", placeholder: "test" },
      },
      
      async authorize(credentials, req) {
            
        const res = await fetch(
            
          `${process.env.NEXT_PUBLIC_USER_URL}/user/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
              // name: credentials?.name,
              // lastname: credentials?.lastName,
              // birthday: credentials?.birthday,
              // username: credentials?.username,
            }),
            headers: { "Content-Type": "application/json",
            
        },
          }
          
        );
        const user = await res.json();

        if (user.error) throw user;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };
