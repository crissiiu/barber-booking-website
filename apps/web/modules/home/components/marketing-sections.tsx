import { Phone, ShieldCheck, Store, Users } from "lucide-react";
import Image from "next/image";
import { appConfig } from "@/configs/app.config";
import {
  BranchCard,
  BrandTrustCard,
  Button,
  CarouselRow,
  CommitmentCard,
  NewsCard,
  ProductCard,
  SectionTitle,
} from "@/shared/components/ui";
import {
  branches,
  brandTrust,
  commitments,
  news,
  products,
  spaceImages,
} from "../data/homepage.data";

export function CommitmentSection() {
  return (
    <section className="bg-primary-dark px-5 py-16 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-accent">
              Same values
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
              Cam kết dịch vụ trong từng lần ghé
            </h2>
            <p className="mt-4 text-sm leading-6 text-blue-100 md:text-base">
              SiuBarber cam kết mang đến trải nghiệm chỉn chu, đúng giờ và đồng
              nhất trong từng dịch vụ.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => (
              <CommitmentCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProductsSection() {
  return (
    <section className="siu-soft-surface px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          action={
            <Button href="/shop" variant="outline">
              Xem thêm sản phẩm
            </Button>
          }
          description="Những sản phẩm chăm sóc tóc và da được SiuBarber chọn lọc để khách hàng duy trì phong độ mỗi ngày."
          title="Sản phẩm nổi bật"
        />
        <CarouselRow ariaLabel="sản phẩm nổi bật">
          {products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </CarouselRow>
      </div>
    </section>
  );
}

export function BarberNewsSection() {
  return (
    <section className="siu-soft-surface-white px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Tin tức SiuBarber" title="Góc Barber" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {news.slice(0, 4).map((item) => (
            <NewsCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function BranchesSection() {
  return (
    <section className="siu-soft-surface px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          description="Tìm không gian SiuBarber gần bạn nhất để đặt lịch thuận tiện và đúng khung giờ mong muốn."
          title="Chi nhánh"
        />
        <CarouselRow ariaLabel="chi nhánh SiuBarber">
          {branches.map((item) => (
            <BranchCard item={item} key={item.id} />
          ))}
        </CarouselRow>
      </div>
    </section>
  );
}

export function BrandTrustSection() {
  return (
    <section className="siu-soft-surface-white px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          description="SiuBarber đồng hành cùng các thương hiệu và tiêu chuẩn dịch vụ đáng tin cậy để bảo đảm chất lượng trải nghiệm."
          title="Chất lượng & Uy tín"
        />
        <CarouselRow ariaLabel="chất lượng và uy tín">
          {brandTrust.map((item) => (
            <BrandTrustCard item={item} key={item.id} />
          ))}
        </CarouselRow>
      </div>
    </section>
  );
}

export function ExperienceSpaceSection() {
  return (
    <section className="siu-soft-surface px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          description="Không gian được thiết kế để mỗi lần cắt tóc là một trải nghiệm thư giãn, chỉn chu và khác biệt."
          title="Không gian & tận hưởng"
        />
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="siu-soft-card relative min-h-[360px] overflow-hidden rounded-lg bg-primary-dark">
            <Image
              alt="Không gian SiuBarber hiện đại"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              src="/home/hero-haircut-v2.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 max-w-3xl text-2xl font-extrabold leading-tight text-white md:text-4xl">
              Vượt qua giới hạn của tiệm tóc truyền thống, SiuBarber tạo dựng
              không gian trải nghiệm mới với trang thiết bị hiện đại.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {spaceImages.map((item) => (
              <div
                className="siu-soft-card relative aspect-[16/10] overflow-hidden rounded-lg bg-surface lg:aspect-auto lg:min-h-[110px]"
                key={item.id}
              >
                <Image alt={item.title} className="object-cover" fill sizes="33vw" src={item.image} />
                <div className="absolute inset-x-0 bottom-0 bg-primary-dark/75 p-4 text-sm font-bold text-white">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuickInfoSection() {
  const infoItems = [
    { icon: Phone, label: appConfig.contact.phone, title: "Hotline" },
    { icon: Store, label: appConfig.contact.address, title: "Địa chỉ" },
    { icon: Users, label: "Barber tư vấn theo form mặt", title: "Đội ngũ" },
    { icon: ShieldCheck, label: "Vệ sinh và đúng giờ", title: "Tiêu chuẩn" },
  ];

  return (
    <section className="bg-primary-dark px-5 py-12 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
        {infoItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              className="siu-soft-card-dark rounded-lg p-5 text-center"
              key={item.title}
            >
              <Icon aria-hidden className="mx-auto text-brand-accent" size={26} />
              <h3 className="mt-4 text-2xl font-extrabold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
