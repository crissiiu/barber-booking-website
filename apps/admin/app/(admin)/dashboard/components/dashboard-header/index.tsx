import { DASHBOARD_DESCRIPTION, DASHBOARD_TITLE } from "@admin/dashboard/constants/dashboard-constants";
import { PageHeader } from "@share/components/layout";
import { Button } from "@share/components/ui";
import { CalendarPlus, Download } from "lucide-react";

export interface DashboardHeaderProps {
  onExportReport?: () => void;
  onCreateBooking?: () => void;
}

export function DashboardHeader({ onExportReport, onCreateBooking }: DashboardHeaderProps) {
  return (
    <PageHeader
      actions={
        <>
          <Button onClick={onExportReport} variant="secondary">
            <Download aria-hidden="true" className="h-4 w-4" />
            Xuất báo cáo
          </Button>
          <Button onClick={onCreateBooking}>
            <CalendarPlus aria-hidden="true" className="h-4 w-4" />
            Tạo lịch hẹn
          </Button>
        </>
      }
      description={DASHBOARD_DESCRIPTION}
      title={DASHBOARD_TITLE}
    />
  );
}

export default DashboardHeader;
