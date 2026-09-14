import type { BarberService } from "../types/service.type";

type ServiceCardProps = {
  service: BarberService;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-md border border-stone-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-stone-950">{service.name}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-600">
        {service.description}
      </p>
      <div className="mt-4 flex items-center justify-between text-sm font-medium text-stone-800">
        <span>{service.durationMinutes} phut</span>
        <span>{service.price.toLocaleString("vi-VN")} VND</span>
      </div>
    </article>
  );
}
