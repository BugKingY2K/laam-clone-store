import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";

export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({

  session: {
    strategy: "jwt"
  },

  providers: [

    Credentials({

      name: "credentials",

      credentials: {

        email: {
          label: "Email",
          type: "email"
        },

        password: {
          label: "Password",
          type: "password"
        }
      },

      async authorize(credentials) {

        try {

          const email =
            credentials?.email as string;

          const password =
            credentials?.password as string;

          if (!email || !password) {
            return null;
          }

          const user =
            await prisma.user.findUnique({

              where: {
                email
              }
            });

          if (!user) {
            return null;
          }

          const validPassword =
            await bcrypt.compare(
              password,
              user.passwordHash
            );

          if (!validPassword) {
            return null;
          }

          return {

            id: user.id,

            email: user.email,

            name:
              `${user.firstName} ${user.lastName}`,

            role: user.role,

            image: user.image ?? null
          };

        } catch (error) {

          console.error(
            "Authorize Error:",
            error
          );

          return null;
        }
      }
    })
  ],

  callbacks: {

    async jwt({
      token,
      user
    }) {

      if (user) {

        token.id =
          (user as any).id;

        token.role =
          (user as any).role;
      }

      return token;
    },

    async session({
      session,
      token
    }) {

      if (session.user) {

        (session.user as any).id =
          token.id;

        (session.user as any).role =
          token.role;
      }

      return session;
    }
  },

  pages: {

    signIn: "/login"
  },

  secret:
    process.env.NEXTAUTH_SECRET
});
