import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-[100svh]">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}
