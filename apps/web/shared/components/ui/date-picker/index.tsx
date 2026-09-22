import type { ComponentProps } from "react";
import { Input } from "@share/components/ui/input";

export function DatePicker(props: Omit<ComponentProps<typeof Input>, "type">) {
  return <Input type="date" {...props} />;
}
