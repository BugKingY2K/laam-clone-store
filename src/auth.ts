import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";

export const {

  handlers,

  signIn,

  signOut,

  auth

} = NextAuth({

  providers: [

    Credentials({

      credentials: {

        email: {},

        password: {}
      },

      async authorize(credentials) {

        const user =
          await prisma.user.findUnique({

            where: {
              email:
                credentials.email as string
            }
          });

        if (!user) {
          return null;
        }

        const valid =
          await bcrypt.compare(
            credentials.password as string,
            user.passwordHash
          );

        if (!valid) {
          return null;
        }

        return user;
      }
    })
  ],

  session: {
    strategy: "jwt"
  },

  pages: {

    signIn: "/login"
  }
  callbacks: {

  async jwt({ token, user }) {

    if (user) {
      token.role = (user as any).role;
    }

    return token;
  },

  async session({ session, token }) {

    if (session.user) {
      (session.user as any).role =
        token.role;
    }

    return session;
  }
}
});
