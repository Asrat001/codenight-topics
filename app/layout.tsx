import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "@/components/nav/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/QueryProvider";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://codenight-topics.vercel.app/"),

	title: {
		template: "%s | Codenight Topics",
		default: "Codenight Topics",
	},
	authors: {
		name: "AsratAdane",
	},

	description:
		"Create your vote on Your favourite topics now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
	openGraph: {
		title: "Codenight Topics",
		description:
			"Create your vote on Your favourite topics now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
		url: "https://codenight-topics.vercel.app/",
		siteName: "Codenight Topics",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Asrat Adane", " Asrat Builds", "Codenight" ,"Topics" , "Codenight Topics" , "Asrat","asrat"],
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} bg-[#000000] text-gray-200 antialiased  py-10`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<QueryProvider>
						<main className="flex flex-col max-w-7xl mx-auto min-h-screen space-y-10 p-5">
							<Navbar />
							<div className="w-full flex-1 ">{children}</div>
							<Footer />
						</main>
					</QueryProvider>

					<Toaster position="top-center" reverseOrder={false} />
				</ThemeProvider>
			</body>
		</html>
	);
}
