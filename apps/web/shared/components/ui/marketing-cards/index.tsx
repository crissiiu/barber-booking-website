import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@share/components/ui/card";

export type MarketingItem = {
  description?: string;
  href?: string;
  id: string;
  image: string;
  maxPrice?: number;
  minPrice?: number;
  title: string;
};

function formatPrice(value?: number) {
  if (!value) return "Liên hệ";
  return `${value.toLocaleString("vi-VN")} VND`;
}

type ServiceCardProps = {
  item: MarketingItem;
};

export function MarketingServiceCard({ item }: ServiceCardProps) {
  return (
    <Card className="flex h-full min-w-0 flex-col overflow-hidden">
      <div className="relative aspect-[16/10] bg-surface">
        <Image
          alt={item.title}
          className="object-cover"
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          src={item.image}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-extrabold text-primary-dark">
            {item.title}
          </h3>
          <p className="shrink-0 text-sm font-extrabold text-brand-accent">
            {item.minPrice ? `Từ ${formatPrice(item.minPrice)}` : "Liên hệ"}
          </p>
        </div>
        {item.description ? (
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
            {item.description}
          </p>
        ) : null}
        <Link
          className="mt-auto inline-flex w-fit items-center gap-1 pt-1 text-sm font-bold text-primary hover:text-brand-accent focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          href={item.href ?? `/services/${item.id}`}
        >
          Tìm hiểu thêm
          <ArrowUpRight aria-hidden size={16} />
        </Link>
      </div>
    </Card>
  );
}

export function ProductCard({ item }: { item: MarketingItem }) {
  return (
    <Card className="min-w-[248px] snap-start overflow-hidden md:min-w-[300px]">
      <div className="relative aspect-square bg-surface">
        <Image
          alt={item.title}
          className="object-cover"
          fill
          sizes="300px"
          src={item.image}
        />
      </div>
      <div className="p-5">
        <h3 className="line-clamp-2 min-h-14 text-lg font-extrabold text-primary-dark">
          {item.title}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-2">
          <p className="text-xs font-semibold text-primary md:text-sm">
            Giá từ {formatPrice(item.minPrice)}
          </p>
          <Link
            className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-primary md:text-sm"
            href={item.href ?? "/products"}
          >
            Tìm hiểu thêm
            <ArrowUpRight aria-hidden size={16} />
          </Link>
        </div>
      </div>
    </Card>
  );
}

export function NewsCard({ item }: { item: MarketingItem }) {
  return (
    <Link className="group block" href={item.href ?? "/news"}>
      <Card className="h-full overflow-hidden">
        <div className="relative aspect-[4/3] bg-surface">
          <Image
            alt={item.title}
            className="object-cover transition duration-500 group-hover:scale-105"
            fill
            sizes="(min-width: 768px) 25vw, 100vw"
            src={item.image}
          />
        </div>
        <div className="p-4">
          <h3 className="line-clamp-2 min-h-12 text-base font-extrabold text-primary-dark group-hover:text-primary">
            {item.title}
          </h3>
        </div>
      </Card>
    </Link>
  );
}

export function BranchCard({ item }: { item: MarketingItem }) {
  return (
    <Card className="min-w-[280px] snap-start overflow-hidden md:min-w-[420px]">
      <div className="relative aspect-[16/10] bg-surface">
        <Image
          alt={item.title}
          className="object-cover"
          fill
          sizes="420px"
          src={item.image}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-extrabold text-primary-dark">
          {item.title}
        </h3>
        <p className="mt-2 flex gap-2 text-sm leading-6 text-slate-600">
          <MapPin
            aria-hidden
            className="mt-0.5 shrink-0 text-primary"
            size={16}
          />
          {item.description}
        </p>
      </div>
    </Card>
  );
}

export function BrandTrustCard({ item }: { item: MarketingItem }) {
  return (
    <Link
      className="block min-w-[250px] snap-start md:min-w-[300px]"
      href={item.href ?? "/about"}
    >
      <Card className="h-full p-5">
        <div className="relative h-16 w-28 overflow-hidden rounded-lg bg-surface">
          <Image
            alt={item.title}
            className="object-cover"
            fill
            sizes="112px"
            src={item.image}
          />
        </div>
        <h3 className="mt-5 text-lg font-extrabold text-primary-dark">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {item.description}
        </p>
      </Card>
    </Link>
  );
}

export function CommitmentCard({ item }: { item: MarketingItem }) {
  return (
    <Card className="siu-soft-card-dark overflow-hidden text-white">
      <div className="relative aspect-[4/3] bg-primary-dark">
        <Image
          alt={item.title}
          className="object-cover opacity-90"
          fill
          sizes="(min-width: 768px) 25vw, 100vw"
          src={item.image}
        />
      </div>
      <h3 className="p-4 text-center text-base font-extrabold text-white">
        {item.title}
      </h3>
    </Card>
  );
}
