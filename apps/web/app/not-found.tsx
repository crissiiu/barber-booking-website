import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
        404
      </p>
      <h1 className="text-3xl font-semibold text-stone-950">
        Khong tim thay trang
      </h1>
      <Link className="text-sm font-medium text-stone-700 underline" href="/">
        Quay ve trang chu
      </Link>
    </main>
  );
}
