import type { BookingStatusTone } from "@admin/dashboard/models/dashboard-models";

export const DASHBOARD_TITLE = "Tổng quan";
export const DASHBOARD_DESCRIPTION =
  "Theo dõi vận hành của salon trong ngày: lịch hẹn, doanh thu, khách hàng và tác vụ đang chờ xử lý.";

export const STATUS_TONE_MAP: Record<string, BookingStatusTone> = {
  "Đã xác nhận": "success",
  "Đang phục vụ": "info",
  "Chờ xử lý": "warning",
};

export function getBookingStatusTone(status: string): BookingStatusTone {
  return STATUS_TONE_MAP[status] ?? "warning";
}
