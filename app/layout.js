import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Sanjivani Sports Public School | Semrahana, Bahraich",
    template: "%s | Sanjivani Sports Public School"
  },
  description: "SSPS Semrahana, Mihinpurwa, Bahraich - Empowering students through holistic education and sports excellence.",
  keywords: ["School", "Sanjivani Sports Public School", "Semrahana", "Mihinpurwa", "Bahraich", "UP School", "Sports School"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-[80px] md:pt-[112px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

