import { httpClient } from "@/shared/lib/http-client";
import type { BarberService } from "../types/service.type";

export async function getServices() {
  const response = await httpClient.get<BarberService[]>("/services");
  return response.data;
}
