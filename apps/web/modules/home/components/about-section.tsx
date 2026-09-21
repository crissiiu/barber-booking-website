import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const highlights = [
  "Tư vấn kiểu tóc theo khuôn mặt, thói quen và phong cách cá nhân.",
  "Đội ngũ barber chú trọng kỹ thuật, vệ sinh dụng cụ và trải nghiệm đúng giờ.",
  "Không gian hiện đại, thoải mái, phù hợp cho lịch cắt tóc nhanh hoặc chăm sóc trọn gói.",
];

export function AboutSection() {
  return (
    <section className="siu-soft-surface-white px-5 pb-14 pt-8 md:px-8 md:pb-20 md:pt-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-lg lg:mx-0">
          <div className="absolute -left-4 top-6 h-full w-full rotate-[-3deg] rounded-lg border border-[#d9a441]/45" />
          <div className="siu-soft-card relative rotate-[-2deg] overflow-hidden rounded-lg p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <Image
                alt="Barber SiuBarber đang tư vấn và cắt tóc cho khách hàng"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                src="/home/hero-haircut-v2.jpg"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 left-5 rounded-full border border-white/70 bg-brand-accent px-5 py-4 text-center text-primary-dark shadow-xl">
            <p className="text-7xl font-black leading-none mb-2!">5+</p>
            <p className="text-sm font-extrabold uppercase">Kinh nghiệm</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-accent">
            Về SiuBarber
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black uppercase leading-tight text-primary-dark md:text-5xl">
            Chỉn chu trong từng đường cắt, thoải mái trong từng lịch hẹn
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
            SiuBarber được xây dựng như một không gian grooming hiện đại, nơi
            mỗi khách hàng được lắng nghe trước khi chọn kiểu tóc, dịch vụ chăm
            sóc và sản phẩm phù hợp. Nội dung giới thiệu chi tiết về lịch sử
            thương hiệu có thể được cập nhật sau từ phần quản trị.
          </p>

          <div className="mt-7 grid gap-4">
            {highlights.map((item) => (
              <div className="flex gap-3" key={item}>
                <CheckCircle2
                  aria-hidden
                  className="mt-1 shrink-0 text-brand-accent"
                  size={20}
                />
                <p className="text-sm leading-6 text-slate-700 md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
