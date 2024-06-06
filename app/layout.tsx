import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "tw-stack Projects",
  description: "Scaffold pre-configured latest tech stack for the web.",
  openGraph: {
    title: "tw-stack",
    description: "Scaffold pre-configured latest tech stack for the web.",
    url: "https://tw-stack.vercel.app",
    type: "website",
    images: [
      {
        url: "https://tw-stack.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "tw-stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@onesamket",
    title: "tw-stack",
    description: "Scaffold pre-configured latest tech stack for the web.",
    images: "https://tw-stack.vercel.app/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen py-6 md:py-8 lg:py-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
