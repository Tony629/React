import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import User from "@/models/User";
// import connect from "@/utils/db";

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

interface ExtendedUser extends User {
  role?: string;
}

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const { email, password } = credentials;

        return {
          id: "1",
          email: email,
          name: "tony zhang",
          role: ["admin", "dev"]
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider == "credentials") {
        return true;
      }

      return false;
    },
    async jwt({ token, user }: any) {
      if (user) token.role = user.role;
      console.log("async jwt:" + JSON.stringify(token))
      return token;
    },
    async session({ session, token }: any) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.sub;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
