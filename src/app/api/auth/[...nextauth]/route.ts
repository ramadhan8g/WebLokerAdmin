import { NextAuthOptions } from "next-auth";

import { comparePassword } from "@/lib/utils";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../lib/prisma";
import NextAuth from "next-auth/next";


export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "email",
					type: "email",
				},
				password: {
					label: "password",
					type: "password",
				},
			},
			async authorize(credentials, req) {
				const user = await prisma.company.findFirst({
                    // ambil data 1 
					where: {
						email: credentials?.email,
					},
				});
				console.log(user)

				if (!user) {
					return null;
				}

				const isMatch = await comparePassword(
					credentials?.password!!,
					user.password
				);

				if (isMatch) {
					return user;
				}

				return null;
			},
		}),
	],
	pages: {
		signIn: "/auth/signin",
		newUser: "/auth/signup",
	},
	callbacks: {
        // utk nambahi id karena d next auth hnya nyimpan email dan nama
		jwt({ token, account, user }) {
			if (account) {
				token.id = user.id;
			}

			return token;
		},
		async session({ session, token, user }) {
			session.user.id = token.id;
			console.log(session)
			return session;
		},
	
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
