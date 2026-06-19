import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
import { auth } from "@/auth";

export async function getCurrentUser() {

  const session = await auth();

  return session?.user ?? null;
}

export async function requireUser() {

  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Authentication required");
  }

  return user;
}

export async function requireAdmin() {

  const user = await requireUser();

  if ((user as any).role !== "ADMIN") {
    throw new Error("Admin access required");
  }

  return user;
}

export const { handlers, auth, signIn, signOut } =
  NextAuth({
    providers: [
      Credentials({
        credentials: {
          email: {},
          password: {}
        },

        async authorize(credentials) {

          if (!credentials?.email) {
            return null;
          }

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

          return {
            id: user.id,
            email: user.email,
            name:
              user.firstName +
              " " +
              user.lastName
          };
        }
      })
    ]
  });
