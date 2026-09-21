import { AdminListPage } from "@/modules/admin-lists/components";
import { services } from "@/modules/admin-lists/data/admin-lists.data";

export default function ServicesPage() {
  return (
    <AdminListPage
      actionLabel="Thêm dịch vụ"
      columns={["Mã dịch vụ", "Tên dịch vụ", "Thời lượng", "Giá", "Trạng thái"]}
      description="Quản lý danh mục dịch vụ, giá, thời lượng và trạng thái hiển thị trên website."
      rows={services}
      title="Dịch vụ"
    />
  );
}
