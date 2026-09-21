import type { ServiceDetail } from "../types/service-detail.type";

export const hairServices: ServiceDetail[] = [
  {
    benefits: [
      "Tư vấn kiểu tóc theo khuôn mặt và chất tóc",
      "Đường cắt gọn, dễ chăm sóc tại nhà",
      "Hoàn thiện kiểu tóc trước khi rời ghế",
    ],
    category: "Dịch vụ tóc",
    content:
      "Dịch vụ cắt tóc tập trung vào form dáng phù hợp với khuôn mặt, thói quen sinh hoạt và phong cách cá nhân. Barber trao đổi trước khi cắt và hoàn thiện từng chi tiết để kiểu tóc giữ được vẻ gọn gàng sau khi về nhà.",
    description:
      "Tư vấn form tóc, cắt gọn và tạo kiểu hoàn thiện theo phong cách riêng.",
    href: "/services/cat-toc",
    id: "cat-toc",
    image: "/services/cat-toc.png",
    minPrice: 70000,
    process: [
      { description: "Lắng nghe mong muốn và đánh giá khuôn mặt, chất tóc.", title: "Tư vấn kiểu tóc" },
      { description: "Làm sạch tóc và chuẩn bị nền tóc trước khi cắt.", title: "Gội và chuẩn bị" },
      { description: "Tạo form, xử lý độ dài và hoàn thiện các đường viền.", title: "Cắt tạo form" },
      { description: "Sấy, tạo kiểu và hướng dẫn cách chăm sóc tại nhà.", title: "Hoàn thiện" },
    ],
    title: "Cắt tóc",
  },
  {
    benefits: [
      "Tạo độ phồng và hướng tóc tự nhiên",
      "Form tóc phù hợp với thói quen tạo kiểu",
      "Hướng dẫn chăm sóc tóc sau khi uốn",
    ],
    category: "Dịch vụ tóc",
    content:
      "Uốn định hình giúp điều chỉnh hướng tóc, tăng độ phồng và tạo nền để việc tạo kiểu mỗi ngày nhanh hơn. Kỹ thuật được lựa chọn theo chất tóc và kiểu dáng mong muốn nhằm giữ vẻ tự nhiên, không nặng nề.",
    description:
      "Định hình hướng tóc và độ phồng để kiểu tóc vào nếp tự nhiên hơn.",
    href: "/services/uon-dinh-hinh",
    id: "uon-dinh-hinh",
    image: "/services/uon-dinh-hinh.png",
    minPrice: 369000,
    process: [
      { description: "Kiểm tra chất tóc và thống nhất độ cong, độ phồng mong muốn.", title: "Đánh giá nền tóc" },
      { description: "Làm sạch và bảo vệ tóc trước khi thực hiện kỹ thuật.", title: "Chuẩn bị tóc" },
      { description: "Chia khu vực và định hình hướng tóc theo form đã chọn.", title: "Uốn định hình" },
      { description: "Sấy hoàn thiện và hướng dẫn duy trì nếp tóc tại nhà.", title: "Kiểm tra thành phẩm" },
    ],
    title: "Uốn định hình",
  },
  {
    benefits: [
      "Tư vấn màu phù hợp với tông da",
      "Màu tóc hài hòa với kiểu cắt",
      "Hướng dẫn giữ màu và chăm sóc tóc",
    ],
    category: "Dịch vụ tóc",
    content:
      "Dịch vụ nhuộm tóc được tư vấn dựa trên tông da, môi trường làm việc và phong cách cá nhân. SiuBarber ưu tiên màu sắc dễ ứng dụng, đồng đều và hài hòa với kiểu tóc hiện tại.",
    description:
      "Làm mới màu tóc với tông màu phù hợp làn da và phong cách cá nhân.",
    href: "/services/nhuom-toc",
    id: "nhuom-toc",
    image: "/services/nhuom-toc.png",
    minPrice: 150000,
    process: [
      { description: "Chọn màu dựa trên tông da, nền tóc và nhu cầu sử dụng.", title: "Tư vấn màu" },
      { description: "Kiểm tra nền tóc và chuẩn bị trước khi lên màu.", title: "Chuẩn bị nền tóc" },
      { description: "Phân vùng và phủ màu đồng đều theo quy trình.", title: "Thực hiện nhuộm" },
      { description: "Làm sạch, sấy tạo kiểu và hướng dẫn giữ màu.", title: "Hoàn thiện màu" },
    ],
    title: "Nhuộm tóc",
  },
];

export const careServices: ServiceDetail[] = [
  {
    benefits: ["Làm sạch tóc và da đầu", "Massage nhẹ giúp thư giãn vùng đầu", "Không gian yên tĩnh và dụng cụ sạch"],
    category: "Thư giãn và chăm sóc da",
    content:
      "Gội đầu dưỡng sinh kết hợp làm sạch tóc, chăm sóc da đầu và massage thư giãn. Trải nghiệm phù hợp khi cần giảm cảm giác căng thẳng và làm mới cơ thể sau một ngày dài.",
    description:
      "Làm sạch tóc, chăm sóc da đầu và massage nhẹ trong không gian thư giãn.",
    href: "/services/goi-dau-duong-sinh",
    id: "goi-dau-duong-sinh",
    image: "/services/goi-dau-duong-sinh.png",
    process: [
      { description: "Kiểm tra nhanh tình trạng tóc và da đầu trước dịch vụ.", title: "Chuẩn bị" },
      { description: "Làm sạch tóc và da đầu với thao tác nhẹ nhàng.", title: "Gội sạch" },
      { description: "Thư giãn vùng đầu, cổ và vai với lực vừa phải.", title: "Massage dưỡng sinh" },
      { description: "Xả sạch, lau khô và sấy tóc gọn gàng.", title: "Sấy hoàn thiện" },
    ],
    title: "Gội đầu dưỡng sinh thư giãn",
  },
  {
    benefits: ["Thao tác nhẹ và chậm rãi", "Dụng cụ được vệ sinh trước mỗi lượt", "Không gian thoải mái, riêng tư"],
    category: "Thư giãn và chăm sóc da",
    content:
      "Dịch vụ lấy ráy tai êm được thực hiện với thao tác cẩn thận, dụng cụ sạch và nhịp độ thư giãn. Khách hàng được hướng dẫn tư thế phù hợp để trải nghiệm diễn ra nhẹ nhàng và thoải mái.",
    description:
      "Chăm sóc tai nhẹ nhàng bằng dụng cụ sạch và thao tác cẩn thận.",
    href: "/services/lay-ray-tai-em",
    id: "lay-ray-tai-em",
    image: "/services/lay-ray-tai.png",
    process: [
      { description: "Trao đổi tình trạng và chuẩn bị tư thế thoải mái.", title: "Kiểm tra ban đầu" },
      { description: "Vệ sinh dụng cụ và khu vực bên ngoài tai.", title: "Làm sạch nhẹ" },
      { description: "Thực hiện chậm rãi, ưu tiên cảm giác dễ chịu.", title: "Chăm sóc tai" },
      { description: "Làm sạch lần cuối và kiểm tra cảm giác của khách hàng.", title: "Hoàn thiện" },
    ],
    title: "Lấy ráy tai êm",
  },
  {
    benefits: ["Làm sạch bề mặt da", "Bổ sung độ ẩm và cảm giác mềm da", "Thư giãn với khăn ấm và massage nhẹ"],
    category: "Thư giãn và chăm sóc da",
    content:
      "Combo chăm sóc da mặt dành cho nam giới tập trung vào làm sạch, thư giãn và cấp ẩm cơ bản. Quy trình nhẹ nhàng giúp làn da có cảm giác thông thoáng, dễ chịu và chỉn chu hơn sau mỗi lần ghé.",
    description:
      "Làm sạch, thư giãn và cấp ẩm cơ bản dành riêng cho làn da nam giới.",
    href: "/services/combo-cham-soc-da-mat",
    id: "combo-cham-soc-da-mat",
    image: "/services/cham-soc-da-mat.png",
    process: [
      { description: "Quan sát tình trạng da và lựa chọn quy trình phù hợp.", title: "Kiểm tra da" },
      { description: "Làm sạch bề mặt da và vùng thường tích tụ bụi bẩn.", title: "Làm sạch" },
      { description: "Đắp mặt nạ kết hợp khăn ấm và massage nhẹ.", title: "Chăm sóc và thư giãn" },
      { description: "Cấp ẩm cơ bản và hướng dẫn chăm sóc sau dịch vụ.", title: "Hoàn thiện" },
    ],
    title: "Combo chăm sóc da mặt",
  },
];

export const services = [...hairServices, ...careServices];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.id === slug);
}
