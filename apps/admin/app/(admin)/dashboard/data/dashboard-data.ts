import type { DashboardMetric, RecentBooking } from "@admin/dashboard/models/dashboard-models";

export const dashboardMetrics: DashboardMetric[] = [
  { label: "Lịch hẹn hôm nay", value: "28", trend: "+12%", tone: "success" },
  { label: "Doanh thu tạm tính", value: "18.4M", trend: "+8%", tone: "success" },
  { label: "Khách mới", value: "9", trend: "+3", tone: "info" },
  { label: "Chờ xử lý", value: "6", trend: "-2", tone: "warning" },
];

export const recentBookings: RecentBooking[] = [
  {
    id: "BK-1029",
    customer: "Nguyễn Minh Anh",
    phone: "0901 222 333",
    service: "Cắt tóc + gội đầu",
    barber: "Khoa Trần",
    time: "09:30",
    status: "Đã xác nhận",
  },
  {
    id: "BK-1030",
    customer: "Trần Quốc Huy",
    phone: "0918 456 888",
    service: "Nhuộm tóc",
    barber: "Minh Lê",
    time: "10:15",
    status: "Chờ xử lý",
  },
  {
    id: "BK-1031",
    customer: "Lê Bảo Châu",
    phone: "0934 555 219",
    service: "Chăm sóc da mặt",
    barber: "Hiếu Phạm",
    time: "11:00",
    status: "Đang phục vụ",
  },
];

export const activityFeed: string[] = [
  "Quản lý đã cập nhật lịch BK-1029 sang đã xác nhận",
  "Thêm dịch vụ mới: Uốn định hình cao cấp",
  "Banner trang chủ đang chờ duyệt",
  "Barber Minh Lê đổi ca làm sang 10:00",
];
