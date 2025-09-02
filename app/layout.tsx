import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
// import { Inter } from "next/font/google";
import {  Work_Sans } from "next/font/google";

// const InterSans = Inter({
//   subsets: ["latin"],
//   variable: "--font-geist-sans",
//   display: "swap",
//   weight: ["400", "500", "600", "700"],
// });

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patient Portail",
  description: "Plateforme pour les patient",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable}  antialiased`}
        style={{
          background: "#ffffff",
          backgroundImage: `
            radial-gradient(circle at  center, rgba(59, 120, 200, 0.5),transparent 70%)
          `,
        }}
      >
        <SidebarProvider>
          <AppSidebar/>
         <main >
            {children}
         </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
