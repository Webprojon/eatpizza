import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import GlobalContextProvider from "@/context/global-context";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata, Viewport } from "next";

const APP_NAME = "Eat Pizza";
const APP_DEFAULT_TITLE = "Eat Pizza APP";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION =
	"Discover the best pizza recipes and toppings with Eat Pizza! From classic margheritas to gourmet creations, satisfy your pizza cravings anytime, anywhere.";

export const metadata: Metadata = {
	applicationName: APP_NAME,
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	description: APP_DESCRIPTION,
	manifest: "/manifest.json",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: APP_DEFAULT_TITLE,
		// startUpImage: [],
	},
	formatDetection: {
		telephone: false,
	},
	openGraph: {
		type: "website",
		siteName: APP_NAME,
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
	twitter: {
		card: "summary",
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
};

export const viewport: Viewport = {
	themeColor: "#FFFFFF",
};

//export const metadata = {
//	title: "Eat Pizza",
//	description:
//		"Discover the best pizza recipes and toppings with Eat Pizza! From classic margheritas to gourmet creations, satisfy your pizza cravings anytime, anywhere.",
//	keywords: [
//		"pizza eat",
//		"eat pizza",
//		"pizza recipes",
//		"homemade pizza",
//		"pizza toppings",
//		"pizza app",
//		"cooking app",
//	],
//	author: "Eat Pizza Restaurant",
//	category: "Food & Drink",
//	version: "1.0.0",
//	platforms: ["Website"],
//};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} flex flex-col justify-between min-h-screen bg-gray-50 dark:bg-gray-900 
				dark:text-gray-300 dark:text-opacity-90 overflow-y-hidden select-none`}
			>
				<div className="animate-spin-25s fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4d2d2d]"></div>
				<div className="animate-spin-25s fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#494579]"></div>
				<ThemeContextProvider>
					<GlobalContextProvider>
						<Header />
						{children}
						<Toaster position="top-center" />
					</GlobalContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
