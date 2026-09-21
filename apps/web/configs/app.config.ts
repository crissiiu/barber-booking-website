export const appConfig = {
  name: "SiuBarber",
  description:
    "Đặt lịch cắt tóc, chăm sóc tóc và trải nghiệm barber hiện đại tại SiuBarber.",
  locale: "vi-VN",
  contact: {
    phone: "1900 636 879",
    address: "12 Nguyễn Trãi, Quận 1, TP. Hồ Chí Minh",
    hours: "Thứ 2 - Chủ nhật, 8h30 - 20h30",
  },
  routes: {
    home: "/",
    services: "/services",
    barbers: "/barbers",
    booking: "/booking",
    login: "/login",
    register: "/register",
    reviews: "/reviews",
    news: "/news",
    products: "/products",
  },
} as const;
