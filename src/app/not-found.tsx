import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-neutral-600">Страница не найдена</p>
        <Link href="/" className="mt-6 underline">
          На главную
        </Link>
      </main>
      <Footer />
    </>
  );
}
