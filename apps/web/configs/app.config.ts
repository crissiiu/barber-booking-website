export const appConfig = {
  name: "Barber Booking",
  description: "Barber booking website for services, barbers, schedules, and appointments.",
  locale: "vi-VN",
  routes: {
    home: "/",
    services: "/services",
    barbers: "/barbers",
    booking: "/booking",
    login: "/login",
    register: "/register",
  },
} as const;
