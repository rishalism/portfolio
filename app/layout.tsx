import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Full Stack Developer in Malappuram | Rishal Mohammed",
  description: "Looking for the best Full Stack Developer in Malappuram or Kerala? Rishal Mohammed specializes in MERN stack development, creating high-performance web applications and scalable solutions.",
  keywords: "Full Stack Developer Malappuram, Best Developer Kerala, MERN Stack Developer, Web Development Malappuram, Software Engineer Kerala, JavaScript, React, Node.js, Portfolio",
  robots: "index, follow",
  openGraph: {
    title: "Best Full Stack Developer in Malappuram | Rishal Mohammed",
    description: "Expert Full Stack Developer in Malappuram, Kerala, delivering innovative web solutions using the MERN stack.",
    url: "https://rishal.tech", // Replace with your actual portfolio URL
    type: "website",
    images: [
      {
        url: "https://rishal.tech/og-image.jpg", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "Best Full Stack Developer in Malappuram - Rishal Mohammed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Replace with your Twitter handle
    title: "Best Full Stack Developer in Malappuram | Rishal Mohammed",
    description: "Discover top-quality web development services from Rishal Mohammed, a leading Full Stack Developer in Kerala.",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
