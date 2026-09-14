import Link from "next/link";
import { appConfig } from "@/configs/app.config";

const publicLinks = [
  { href: "/services", label: "Dich vu" },
  { href: "/barbers", label: "Tho cat" },
  { href: "/booking", label: "Dat lich" },
];

export default function PublicHomePage() {
  return (
    <main className="min-h-screen bg-[var(--surface)] px-6 py-10">
      <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center gap-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-600">
            Barber Booking
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-stone-950 sm:text-6xl">
            {appConfig.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Nen tang dat lich cat toc theo module: ro route, ro domain, san
            sang mo rong cho khach hang, barber va admin.
          </p>
        </div>

        <nav className="flex flex-wrap gap-3">
          {publicLinks.map((link) => (
            <Link
              className="rounded-md bg-stone-950 px-4 py-2 text-sm font-medium text-white"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
