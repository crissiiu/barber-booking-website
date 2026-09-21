import type { HeroSlide, MarketingItem } from "@/shared/components/ui";

const baseImage = "/home/branch-premium.svg";

// Dữ liệu hero có thể thay bằng cấu hình từ admin sau này mà không đổi component.
export const heroSlides: HeroSlide[] = [
  {
    alt: "Chuyên viên SiuBarber tư vấn kiểu tóc cho khách hàng",
    ctaLabel: "Khám phá đội ngũ",
    description:
      "Chuyên viên lắng nghe khuôn mặt, thói quen và phong cách của bạn.",
    eyebrow: "TƯ VẤN CÁ NHÂN",
    href: "/barbers",
    image: "/home/hero-consultation-v2.jpg",
    mobileImage: "/home/hero-consultation-v2.jpg",
    title: "Kiểu tóc hợp bạn không chỉ hợp xu hướng",
  },
  {
    alt: "Barber SiuBarber thực hiện kiểu tóc fade cho khách hàng",
    ctaLabel: "Đặt lịch ngay",
    description:
      "Kỹ thuật chuẩn xác, dụng cụ sạch và từng chi tiết được hoàn thiện để tạo nên phong cách riêng của bạn.",
    eyebrow: "KỸ THUẬT CHUẨN BARBER",
    href: "/booking",
    image: "/home/hero-haircut-v2.jpg",
    mobileImage: "/home/hero-haircut-v2.jpg",
    title: "Từng đường cắt, đúng chất riêng",
  },
  {
    alt: "Hộp quà và sản phẩm grooming trong chương trình ưu đãi SiuBarber",
    ctaLabel: "Nhận ưu đãi",
    description:
      "Đặt lịch trong tuần để nhận quà grooming tuyển chọn và đặc quyền dành riêng cho khách hàng SiuBarber.",
    eyebrow: "ƯU ĐÃI ĐẶC BIỆT",
    href: "/booking",
    image: "/home/hero-promotion-v2.jpg",
    mobileImage: "/home/hero-promotion-v2.jpg",
    title: "Đặt lịch hôm nay, nhận quà phong cách",
  },
];

export const commitments: MarketingItem[] = [
  { id: "on-time", image: "/services/cat-toc.png", title: "Đúng giờ đã đặt" },
  { id: "clean", image: "/services/lay-ray-tai.png", title: "Dụng cụ sạch mỗi ca" },
  { id: "consult", image: "/home/hero-consultation-v2.jpg", title: "Tư vấn form tóc riêng" },
  { id: "consistent", image: "/services/uon-dinh-hinh.png", title: "Chất lượng đồng nhất" },
];

export const products: MarketingItem[] = [
  {
    href: "/products/clay-matte",
    id: "clay-matte",
    image: "/products/matte-clay.png",
    minPrice: 180000,
    title: "Siu Matte Clay",
  },
  {
    href: "/products/sea-salt",
    id: "sea-salt",
    image: "/products/sea-salt-spray.png",
    minPrice: 160000,
    title: "Sea Salt Styling Spray",
  },
  {
    href: "/products/shampoo-cool",
    id: "shampoo-cool",
    image: "/products/cooling-hair-wash.png",
    minPrice: 220000,
    title: "Cooling Hair Wash",
  },
  {
    href: "/products/beard-oil",
    id: "beard-oil",
    image: "/products/sea-salt-spray.png",
    minPrice: 190000,
    title: "Beard Oil Premium",
  },
  {
    href: "/products/skin-gel",
    id: "skin-gel",
    image: "/products/cooling-hair-wash.png",
    minPrice: 210000,
    title: "After Shave Gel",
  },
];

export const news: MarketingItem[] = [
  {
    href: "/news/lich-cat-toc-cuoi-tuan",
    id: "weekend",
    image: "/services/cat-toc.png",
    title: "Đặt lịch cuối tuần sao cho không phải chờ lâu",
  },
  {
    href: "/news/chon-kieu-toc",
    id: "style",
    image: "/home/hero-consultation-v2.jpg",
    title: "Cách chọn form tóc phù hợp khuôn mặt nam giới",
  },
  {
    href: "/news/cham-soc-da-sau-cao-rau",
    id: "skin",
    image: "/services/cham-soc-da-mat.png",
    title: "Chăm sóc da sau cạo râu để hạn chế kích ứng",
  },
  {
    href: "/news/san-pham-tao-kieu",
    id: "product",
    image: "/products/matte-clay.png",
    title: "Dùng sản phẩm tạo kiểu sao cho tóc vẫn tự nhiên",
  },
];

export const branches: MarketingItem[] = [
  {
    description: "12 Nguyễn Trãi, Quận 1, TP. Hồ Chí Minh",
    id: "q1",
    image: "/services/cat-toc.png",
    title: "SiuBarber Nguyễn Trãi",
  },
  {
    description: "88 Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh",
    id: "q3",
    image: "/services/uon-dinh-hinh.png",
    title: "SiuBarber Lê Văn Sỹ",
  },
  {
    description: "25 Phan Xích Long, Phú Nhuận, TP. Hồ Chí Minh",
    id: "pn",
    image: "/services/nhuom-toc.png",
    title: "SiuBarber Phú Nhuận",
  },
];

export const brandTrust: MarketingItem[] = [
  {
    description:
      "Đồng hành cùng sản phẩm tạo kiểu chọn lọc cho độ giữ nếp và cảm giác tóc tự nhiên.",
    href: "/partners/style-lab",
    id: "style-lab",
    image: "/products/matte-clay.png",
    title: "Style Lab",
  },
  {
    description:
      "Tiêu chuẩn vệ sinh dụng cụ và quy trình phục vụ thống nhất tại từng chi nhánh.",
    href: "/partners/clean-standard",
    id: "clean-standard",
    image: "/services/lay-ray-tai.png",
    title: "Clean Standard",
  },
  {
    description:
      "Giải pháp thanh toán linh hoạt giúp khách hàng hoàn tất lịch hẹn nhanh gọn.",
    href: "/partners/pay-flex",
    id: "pay-flex",
    image: "/brand/siubarber-logo.svg",
    title: "Pay Flex",
  },
];

export const spaceImages: MarketingItem[] = [
  { id: "space-1", image: "/services/cat-toc.png", title: "Phòng cắt riêng tư" },
  { id: "space-2", image: "/services/goi-dau-duong-sinh.png", title: "Khu gội đầu thư giãn" },
  { id: "space-3", image: "/products/matte-clay.png", title: "Góc grooming shop" },
];
