export const bookings = [
  ["BK-1029", "Nguyễn Minh Anh", "Khoa Trần", "Cắt tóc + gội đầu", "09:30", "Đã xác nhận"],
  ["BK-1030", "Trần Quốc Huy", "Minh Lê", "Nhuộm tóc", "10:15", "Chờ xử lý"],
  ["BK-1031", "Lê Bảo Châu", "Hiếu Phạm", "Chăm sóc da mặt", "11:00", "Đang phục vụ"],
  ["BK-1032", "Phạm Đức Nam", "Khoa Trần", "Lấy ráy tai", "13:30", "Đã cọc"],
] as const;

export const customers = [
  ["CUS-201", "Nguyễn Minh Anh", "0901 222 333", "12 lần", "VIP"],
  ["CUS-202", "Trần Quốc Huy", "0918 456 888", "4 lần", "Đang hoạt động"],
  ["CUS-203", "Lê Bảo Châu", "0934 555 219", "7 lần", "Đang hoạt động"],
  ["CUS-204", "Phạm Đức Nam", "0977 120 345", "2 lần", "Mới"],
] as const;

export const barbers = [
  ["BAR-01", "Khoa Trần", "Senior Barber", "8 lịch hôm nay", "Đang hoạt động"],
  ["BAR-02", "Minh Lê", "Color Specialist", "6 lịch hôm nay", "Đang hoạt động"],
  ["BAR-03", "Hiếu Phạm", "Skin Care", "4 lịch hôm nay", "Đang hoạt động"],
  ["BAR-04", "Long Nguyễn", "Junior Barber", "Nghỉ ca", "Ngừng hoạt động"],
] as const;

export const services = [
  ["SV-01", "Cắt tóc nam", "45 phút", "120.000đ", "Đã xuất bản"],
  ["SV-02", "Nhuộm tóc", "120 phút", "650.000đ", "Đã xuất bản"],
  ["SV-03", "Gội đầu dưỡng sinh", "60 phút", "180.000đ", "Đã xuất bản"],
  ["SV-04", "Uốn định hình", "150 phút", "800.000đ", "Bản nháp"],
] as const;

export const banners = [
  ["BN-01", "Hero trang chủ", "Desktop + mobile", "Đã xuất bản", "12/09/2026"],
  ["BN-02", "Khuyến mãi tháng 9", "Desktop", "Bản nháp", "21/09/2026"],
  ["BN-03", "Dịch vụ mới", "Mobile", "Đã lưu trữ", "01/09/2026"],
] as const;

export const payments = [
  ["PAY-701", "BK-1029", "Nguyễn Minh Anh", "350.000đ", "Đã thanh toán"],
  ["PAY-702", "BK-1030", "Trần Quốc Huy", "200.000đ", "Đã cọc"],
  ["PAY-703", "BK-1031", "Lê Bảo Châu", "180.000đ", "Chờ xử lý"],
] as const;
