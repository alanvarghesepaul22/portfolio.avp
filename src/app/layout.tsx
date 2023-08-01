import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter,Bai_Jamjuree } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const baijumjuree =Bai_Jamjuree({
  weight:["200","300","400","500","600","700"],
  subsets:["latin"]
})

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
      <body className={`${baijumjuree.className} bg-gray-50 text-gray-950`}>
        {/* <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem]
         w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] 
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
         xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div> */}
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
