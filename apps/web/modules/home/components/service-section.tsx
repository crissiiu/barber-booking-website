import {
  Button,
  MarketingServiceCard,
  SectionTitle,
  type MarketingItem,
} from "@/shared/components/ui";

type ServiceSectionProps = {
  description: string;
  items: MarketingItem[];
  title: string;
};

// Section dịch vụ dùng lại cho dịch vụ tóc và chăm sóc da, trình bày như bảng gói dịch vụ cao cấp.
export function ServiceSection({
  description,
  items,
  title,
}: ServiceSectionProps) {
  return (
    <section className="siu-soft-surface px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          action={
            <Button href="/services" variant="outline">
              Xem thêm dịch vụ
            </Button>
          }
          description={description}
          title={title}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {items.slice(0, 3).map((item) => (
            <MarketingServiceCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
