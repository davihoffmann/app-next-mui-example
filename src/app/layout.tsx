import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import CssBaseline from "@mui/material/CssBaseline";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
// import Header from "@/components/Layout/Header";
import ThemeProvider from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "App Demonstração",
  description: "App para demonstrar conceitos de Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" className={roboto.className}>
      <CssBaseline />
      <ThemeProvider>
        <body>
          {/* <Header /> */}
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
