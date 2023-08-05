import "./globals.css";
import type { Metadata } from "next";
import { Inter, Bai_Jamjuree } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "../../context/theme";

const inter = Inter({ subsets: ["latin"] });

const baijumjuree = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan | Personal Portfolio",
  description: "Alan is a Web Developer!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${baijumjuree.className} bg-gray-50 dark:bg-gray-950 text-gray-950 dark:text-gray-50`}
      >
        <ThemeContextProvider>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              success: {
                style: {
                  background: "#E8F5E9",
                  color: "#1B5E20",
                },
              },
              error: {
                style: {
                  background: "#FFEBEE",
                  color: "#80393C",
                },
              },
            }}
          />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
