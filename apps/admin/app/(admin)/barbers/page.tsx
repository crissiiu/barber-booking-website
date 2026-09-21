import { AdminListPage } from "@/modules/admin-lists/components";
import { barbers } from "@/modules/admin-lists/data/admin-lists.data";

export default function BarbersPage() {
  return (
    <AdminListPage
      actionLabel="Thêm barber"
      columns={["Mã barber", "Họ tên", "Chuyên môn", "Lịch hiện tại", "Trạng thái"]}
      description="Quản lý nhân sự barber, chuyên môn, trạng thái làm việc và lịch phục vụ."
      rows={barbers}
      title="Barber"
    />
  );
}
