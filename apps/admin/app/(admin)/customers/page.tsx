import { AdminListPage } from "@/modules/admin-lists/components";
import { customers } from "@/modules/admin-lists/data/admin-lists.data";

export default function CustomersPage() {
  return (
    <AdminListPage
      actionLabel="Thêm khách"
      columns={["Mã khách", "Họ tên", "Số điện thoại", "Số lần đến", "Phân hạng"]}
      description="Theo dõi hồ sơ khách hàng, lịch sử đặt lịch và nhóm chăm sóc phù hợp."
      rows={customers}
      title="Khách hàng"
    />
  );
}
