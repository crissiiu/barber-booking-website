import { AdminListPage } from "@/modules/admin-lists/components";
import { payments } from "@/modules/admin-lists/data/admin-lists.data";

export default function PaymentsPage() {
  return (
    <AdminListPage
      actionLabel="Tạo giao dịch"
      columns={["Mã giao dịch", "Mã lịch", "Khách hàng", "Số tiền", "Trạng thái"]}
      description="Theo dõi thanh toán, tiền cọc và các giao dịch cần đối soát."
      rows={payments}
      title="Thanh toán"
    />
  );
}
