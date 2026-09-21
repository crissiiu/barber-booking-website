import { Button } from "@/shared/components/ui";
import { ArrowLeft, Check, Scissors, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceDetail as ServiceDetailType } from "../types/service-detail.type";

function formatPrice(value?: number) {
  return value ? `${value.toLocaleString("vi-VN")} VND` : "Liên hệ";
}

export function ServiceDetail({ service }: { service: ServiceDetailType }) {
  return (
    <main id="main-content" className="bg-white text-primary-dark">
      <section className="siu-soft-surface px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-brand-accent"
            href="/services"
          >
            <ArrowLeft aria-hidden size={17} />
            Tất cả dịch vụ
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-accent md:text-sm">
                {service.category}
              </p>
              <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-primary-dark md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                {service.description}
              </p>
              <div className="mt-7 border-l-4 border-brand-accent pl-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Giá từ
                </p>
                <p className="mt-1 text-3xl font-black text-primary">
                  {formatPrice(service.minPrice)}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/booking" size="lg" variant="primary">
                  Đặt lịch ngay
                </Button>
                <Button href="/locations" size="lg" variant="outline">
                  Tìm chi nhánh
                </Button>
              </div>
            </div>

            <div className="siu-soft-card relative aspect-[3/2] overflow-hidden rounded-md bg-primary-dark">
              <Image
                alt={`${service.title} tại SiuBarber`}
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                src={service.image}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="siu-soft-surface-white px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-accent">
              Quy trình dịch vụ
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase text-primary md:text-5xl">
              Chỉn chu trong từng bước
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {service.content}
            </p>
          </div>

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li className="siu-soft-card rounded-lg p-6 md:p-7" key={step.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-primary-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-primary-dark px-5 py-14 text-white md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-brand-accent">
              <Scissors aria-hidden size={22} />
              <span className="text-xs font-extrabold uppercase tracking-[0.24em]">
                Trải nghiệm SiuBarber
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-5xl">
              Thư giãn và làm mới phong cách
            </h2>
          </div>
          <div>
            <ul className="grid gap-4">
              {service.benefits.map((benefit) => (
                <li className="flex items-start gap-3 text-blue-50" key={benefit}>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent text-primary-dark">
                    <Check aria-hidden size={15} strokeWidth={3} />
                  </span>
                  <span className="leading-7">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8" href="/booking" size="lg" variant="secondary">
              <Sparkles aria-hidden size={18} />
              Chọn lịch phù hợp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
