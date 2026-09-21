import { ServiceDetail } from "@/modules/services/components/ServiceDetail";
import {
  getServiceBySlug,
  services,
} from "@/modules/services/data/services.data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata(
  props: ServiceDetailPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    description: service.description,
    title: `${service.title} | SiuBarber`,
  };
}

export default async function ServiceDetailPage(
  props: ServiceDetailPageProps,
) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
