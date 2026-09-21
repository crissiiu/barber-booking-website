import { Plus, Search } from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Button, Card, Input, Select, StatusBadge, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui";

type AdminListPageProps = {
  title: string;
  description: string;
  actionLabel: string;
  columns: string[];
  rows: readonly (readonly string[])[];
};

function statusTone(value: string) {
  const normalized = value.toLowerCase();

  if (["active", "published", "paid", "đã xác nhận", "đang phục vụ", "đang hoạt động", "đã thanh toán", "đã xuất bản", "vip"].includes(normalized)) {
    return "success";
  }

  if (["pending", "deposit", "draft", "chờ xử lý", "đã cọc", "bản nháp", "mới"].includes(normalized)) {
    return "warning";
  }

  if (["inactive", "archived", "ngừng hoạt động", "đã lưu trữ"].includes(normalized)) {
    return "neutral";
  }

  return "info";
}

export function AdminListPage({ actionLabel, columns, description, rows, title }: AdminListPageProps) {
  return (
    <div className="space-y-6 p-4 lg:p-6">
      <PageHeader
        actions={
          <Button>
            <Plus aria-hidden="true" className="h-4 w-4" />
            {actionLabel}
          </Button>
        }
        description={description}
        title={title}
      />

      <Card>
        <div className="grid gap-3 border-b border-primary/10 p-4 md:grid-cols-[minmax(0,1fr)_180px_140px]">
          <label className="relative block">
            <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
            <Input className="pl-10" placeholder="Tìm kiếm..." type="search" />
          </label>
          <Select defaultValue="all" aria-label="Lọc trạng thái">
            <option value="all">Tất cả trạng thái</option>
            <option value="active">Đang hoạt động</option>
            <option value="pending">Chờ xử lý</option>
          </Select>
          <Button type="button" variant="secondary">
            Áp dụng
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <tr>
                {columns.map((column) => (
                  <TableHeaderCell key={column}>{column}</TableHeaderCell>
                ))}
                <TableHeaderCell>Hành động</TableHeaderCell>
              </tr>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.join("-")}>
                  {row.map((cell, index) => (
                    <TableCell className={index === 0 ? "font-medium text-primary" : undefined} key={`${row[0]}-${cell}`}>
                      {index === row.length - 1 ? <StatusBadge tone={statusTone(cell)}>{cell}</StatusBadge> : cell}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button size="sm" type="button" variant="ghost">
                      Chi tiết
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
