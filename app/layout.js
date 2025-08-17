import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import LenisWrapper from "./components/LenisWrapper"; // client component


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Adarsh Pathania",
  description: "Adarsh Pathania Portfolio Website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased theme-bg  min-w-screen  `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisWrapper>
        
            <Navbar />
            {children}
            
          </LenisWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
