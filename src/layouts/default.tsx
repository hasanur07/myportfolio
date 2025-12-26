export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-[100svh]">
      <main>
        {children}
      </main>
    </div>
  );
}
