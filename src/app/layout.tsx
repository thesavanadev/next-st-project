import { ReactNode } from "react";
import { Comfortaa as FontHeader, Montserrat as FontBody } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
	title: "NextJS Starter Template",
	description: "Starter template for NextJS projects using Tailwind CSS.",
};

const fontHeader = FontHeader({ subsets: ["latin"], variable: "--font-header" });
const fontBody = FontBody({ subsets: ["latin"], variable: "--font-body" });

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
			</head>

			<body className={cn("flex h-screen flex-col", fontHeader.variable, fontBody.variable)}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<header>Header Goes Here</header>

					<main>{children}</main>

					<footer className="mt-auto">Footer Goes Here</footer>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
