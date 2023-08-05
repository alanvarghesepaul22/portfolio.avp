import ResumeFooter from "@/components/resume/ResumeFooter";
import ResumeHead from "@/components/resume/ResumeHead";

export default function ResumePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ResumeHead />
      {children}
      <ResumeFooter />
    </div>
  );
}
