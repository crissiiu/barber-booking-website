import { Button, Input } from "@/shared/components/ui";
import { Star } from "lucide-react";
import Link from "next/link";

export function BookingReviewPanel() {
  return (
    <section className="siu-soft-surface px-5 py-14 md:px-8 md:py-16">
      <div className="siu-soft-card mx-auto grid max-w-7xl overflow-hidden rounded-lg lg:grid-cols-[1.08fr_0.92fr]">
        <article className="p-6 md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-accent">
            Đặt lịch nhanh
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-black uppercase leading-tight text-primary-dark md:text-5xl">
            Đặt lịch giữ chỗ chỉ 30s
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            Nhập số điện thoại để bắt đầu chọn dịch vụ, thợ và khung giờ phù
            hợp. SiuBarber sẽ giữ chỗ để anh đến đúng giờ, không phải chờ lâu.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Input
              aria-label="Số điện thoại đặt lịch"
              inputMode="tel"
              placeholder="Nhập số điện thoại của anh"
            />
            <Button
              className="shrink-0"
              href="/booking"
              size="lg"
              variant="primary"
            >
              ĐẶT LỊCH NGAY
            </Button>
          </div>
        </article>

        <Link
          className="group relative overflow-hidden bg-primary-dark p-6 text-white md:p-10"
          href="/reviews"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,164,65,0.26),transparent_36%)]" />
          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-accent">
              Đánh giá dịch vụ
            </p>
            <h2 className="mt-3 text-2xl font-black uppercase leading-tight md:text-4xl text-blue-100">
              Mời khách hàng đánh giá về dịch vụ của chúng em
            </h2>
            <p className="mt-4 text-sm leading-6 text-blue-100 md:text-base">
              Phản hồi của anh sẽ giúp cho dịch vụ của chúng em tốt hơn.
            </p>
            <div aria-label="5 sao đánh giá" className="mt-8 flex gap-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <Star
                  aria-hidden
                  className="star-shine fill-current"
                  key={index}
                  size={34}
                  style={{ animationDelay: `${index * 120}ms` }}
                />
              ))}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
