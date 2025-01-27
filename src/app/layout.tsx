import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import GlobalContextProvider from "@/context/global-context";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Eat Pizza",
	description:
		"Discover the best pizza recipes and toppings with Eat Pizza! From classic margheritas to gourmet creations, satisfy your pizza cravings anytime, anywhere.",
	keywords: [
		"pizza eat",
		"eat pizza",
		"pizza recipes",
		"homemade pizza",
		"pizza toppings",
		"pizza app",
		"cooking app",
	],
	author: "Eat Pizza Restaurant",
	category: "Food & Drink",
	version: "1.0.0",
	platforms: ["Website"],
};
<meta name="apple-mobile-web-app-title" content="Eat Pizza" />;
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta name="apple-mobile-web-app-title" content="Eat Pizza" />
			<body
				className={`${inter.className} flex flex-col justify-between min-h-screen bg-gray-100 dark:bg-gray-900 
				dark:text-gray-300 dark:text-opacity-90 overflow-y-hidden`}
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
