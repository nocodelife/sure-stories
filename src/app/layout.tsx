import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sure Stories — Customer interviews that reveal the truth",
  description:
    "Sure Stories runs calm, structured interviews with your customers and turns what they say into clear insights you can use.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sure Stories — Customer interviews that reveal the truth",
    description:
      "Sure Stories runs calm, structured interviews with your customers and turns what they say into clear insights you can use.",
    images: ["/social.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sure Stories — Customer interviews that reveal the truth",
    description:
      "Sure Stories runs calm, structured interviews with your customers and turns what they say into clear insights you can use.",
    images: ["/social.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
