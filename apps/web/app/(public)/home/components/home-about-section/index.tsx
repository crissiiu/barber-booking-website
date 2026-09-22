import Image from "next/image";
import { Button } from "@/shared/components/ui";

export function AboutSection() {
  return (
    <section className="siu-soft-surface px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-dark shadow-xl">
            <Image
              alt="Về SiuBarber"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/home/hero-consultation-v2.jpg"
            />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-accent">
              VỀ SIUBARBER
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary-dark md:text-4xl">
              Hơn cả cắt tóc, đó là phong cách sống và sự tự tin
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              SiuBarber được hình thành với sứ mệnh mang tới cho nam giới Việt Nam một không gian trải nghiệm cắt tóc chỉn chu, tay nghề chuẩn xác và sự tư vấn tận tâm theo form mặt riêng.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/booking">Đặt lịch trải nghiệm</Button>
              <Button href="/barbers" variant="outline">Đội ngũ Barber</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
