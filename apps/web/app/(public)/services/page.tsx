import { services } from "@/modules/services/data/services.data";
import { MarketingServiceCard } from "@/shared/components/ui";

export default function ServicesPage() {
  return (
    <main id="main-content" className="siu-soft-surface px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-accent">
          Dịch vụ SiuBarber
        </p>
        <h1 className="mt-3 text-4xl font-black uppercase text-primary md:text-6xl">
          Chọn trải nghiệm phù hợp
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
          Từ cắt, uốn, nhuộm đến các dịch vụ thư giãn và chăm sóc dành cho nam giới.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <MarketingServiceCard item={service} key={service.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
