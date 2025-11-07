import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { db } from "./db";
import { env } from "./env";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  callbacks: {
    session: ({ session, user }: any) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db),
  providers: [
    ...(env.GITHUB_ID && env.GITHUB_SECRET
      ? [
          GitHub({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
          }),
        ]
      : []),
    ...(env.GOOGLE_ID && env.GOOGLE_SECRET
      ? [
          Google({
            clientId: env.GOOGLE_ID,
            clientSecret: env.GOOGLE_SECRET,
          }),
        ]
      : []),
  ],
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
    error: "/auth/error",
  },
};