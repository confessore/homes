import Image from "next/image";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between gap-3 bg-stone-200 py-10 text-stone-800 opacity-90 dark:bg-stone-800 dark:text-stone-200">
      {children}
    </main>
  );
}
