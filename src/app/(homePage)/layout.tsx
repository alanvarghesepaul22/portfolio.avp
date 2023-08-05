import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <Header/>
    {children}
    <Footer/>
    <ThemeSwitch />
    </div>;
    
}
