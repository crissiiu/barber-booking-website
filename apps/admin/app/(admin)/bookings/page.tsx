import { AdminListPage } from "@/modules/admin-lists/components";
import { bookings } from "@/modules/admin-lists/data/admin-lists.data";

export default function BookingsPage() {
  return (
    <AdminListPage
      actionLabel="Tạo lịch hẹn"
      columns={["Mã lịch", "Khách hàng", "Barber", "Dịch vụ", "Giờ", "Trạng thái"]}
      description="Quản lý lịch hẹn, cập nhật trạng thái và theo dõi tiến độ phục vụ trong ngày."
      rows={bookings}
      title="Lịch hẹn"
    />
  );
}
