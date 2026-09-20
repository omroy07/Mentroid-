import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          Mentroid
        </h1>
      </section>
    </main>
  );
}