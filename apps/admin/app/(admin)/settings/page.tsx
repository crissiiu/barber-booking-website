import { Save } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Select } from "@/components/ui";

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-4 lg:p-6">
      <PageHeader
        actions={
          <Button>
            <Save aria-hidden="true" className="h-4 w-4" />
            Lưu cấu hình
          </Button>
        }
        description="Cấu hình thông tin vận hành cơ bản của khu admin. Các giá trị này sẽ kết nối backend trong giai đoạn tiếp theo."
        title="Cài đặt"
      />

      <Card>
        <CardHeader>
          <CardTitle>Thông tin salon</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm font-medium text-foreground">
            Tên hệ thống
            <Input className="mt-2" defaultValue="SiuBarber" />
          </label>
          <label className="block text-sm font-medium text-foreground">
            Múi giờ
            <Select className="mt-2" defaultValue="Asia/Saigon">
              <option value="Asia/Saigon">Asia/Saigon</option>
              <option value="UTC">UTC</option>
            </Select>
          </label>
          <label className="block text-sm font-medium text-foreground">
            Giờ mở cửa
            <Input className="mt-2" defaultValue="08:00" />
          </label>
          <label className="block text-sm font-medium text-foreground">
            Giờ đóng cửa
            <Input className="mt-2" defaultValue="21:00" />
          </label>
        </CardContent>
      </Card>
    </div>
  );
}
