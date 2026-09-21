export { getServices } from "./api/service.api";
export { ServiceCard } from "./components/ServiceCard";
export { ServiceDetail } from "./components/ServiceDetail";
export {
  careServices,
  getServiceBySlug,
  hairServices,
  services,
} from "./data/services.data";
export { useServices } from "./hooks/useServices";
export type { BarberService } from "./types/service.type";
export type { ServiceDetail as ServiceDetailType } from "./types/service-detail.type";
