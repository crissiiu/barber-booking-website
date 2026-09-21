import { CalendarPlus, Download, MoreHorizontal } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Button, Card, CardContent, CardHeader, CardTitle, StatusBadge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui";
import { activityFeed, dashboardMetrics, recentBookings } from "@/modules/dashboard/data/admin-dashboard.data";

function bookingTone(status: string) {
  if (status === "Đã xác nhận") return "success";
  if (status === "Đang phục vụ") return "info";
  return "warning";
}

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-4 lg:p-6">
      <PageHeader
        actions={
          <>
            <Button variant="secondary">
              <Download aria-hidden="true" className="h-4 w-4" />
              Xuất báo cáo
            </Button>
            <Button>
              <CalendarPlus aria-hidden="true" className="h-4 w-4" />
              Tạo lịch hẹn
            </Button>
          </>
        }
        description="Theo dõi vận hành của salon trong ngày: lịch hẹn, doanh thu, khách hàng và tác vụ đang chờ xử lý."
        title="Tổng quan"
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <Card key={metric.label}>
            <CardContent className="p-4">
              <p className="text-sm text-slate-500">{metric.label}</p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                <StatusBadge tone={metric.tone}>{metric.trend}</StatusBadge>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Lịch hẹn gần nhất</CardTitle>
            <Button size="sm" variant="ghost">
              <MoreHorizontal aria-hidden="true" className="h-4 w-4" />
              Tùy chọn
            </Button>
          </CardHeader>
          <div className="overflow-x-auto">
            <Table>
              <TableHead>
                <tr>
                  <TableHeaderCell>Mã lịch</TableHeaderCell>
                  <TableHeaderCell>Khách hàng</TableHeaderCell>
                  <TableHeaderCell>Dịch vụ</TableHeaderCell>
                  <TableHeaderCell>Barber</TableHeaderCell>
                  <TableHeaderCell>Giờ</TableHeaderCell>
                  <TableHeaderCell>Trạng thái</TableHeaderCell>
                </tr>
              </TableHead>
              <TableBody>
                {recentBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium text-primary">{booking.id}</TableCell>
                    <TableCell>
                      <p className="font-medium text-foreground">{booking.customer}</p>
                      <p className="text-xs text-slate-500">{booking.phone}</p>
                    </TableCell>
                    <TableCell>{booking.service}</TableCell>
                    <TableCell>{booking.barber}</TableCell>
                    <TableCell>{booking.time}</TableCell>
                    <TableCell>
                      <StatusBadge tone={bookingTone(booking.status)}>{booking.status}</StatusBadge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hoạt động hệ thống</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {activityFeed.map((activity) => (
                <li className="border-l-2 border-primary-soft pl-3 text-sm leading-6 text-slate-600" key={activity}>
                  {activity}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
