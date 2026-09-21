import {
  BadgeDollarSign,
  CalendarClock,
  GalleryHorizontalEnd,
  LayoutDashboard,
  Scissors,
  Settings,
  Sparkles,
  Users,
  UserRoundCog,
} from "lucide-react";

export const adminNavigation = [
  { href: "/", label: "Tổng quan", icon: LayoutDashboard },
  { href: "/bookings", label: "Lịch hẹn", icon: CalendarClock },
  { href: "/customers", label: "Khách hàng", icon: Users },
  { href: "/barbers", label: "Barber", icon: UserRoundCog },
  { href: "/services", label: "Dịch vụ", icon: Scissors },
  { href: "/banners", label: "Banner CMS", icon: GalleryHorizontalEnd },
  { href: "/payments", label: "Thanh toán", icon: BadgeDollarSign },
  { href: "/settings", label: "Cài đặt", icon: Settings },
] as const;

export const adminQuickActions = [{ href: "/bookings", label: "Xử lý lịch mới", icon: Sparkles }] as const;
