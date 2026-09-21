import { AdminListPage } from "@/modules/admin-lists/components";
import { banners } from "@/modules/admin-lists/data/admin-lists.data";

export default function BannersPage() {
  return (
    <AdminListPage
      actionLabel="Tạo banner"
      columns={["Mã banner", "Tên banner", "Biến thể", "Trạng thái", "Cập nhật"]}
      description="Khu quản lý Banner CMS riêng cho admin, sẵn sàng tích hợp editor theo kế hoạch banner CMS."
      rows={banners}
      title="Banner CMS"
    />
  );
}
