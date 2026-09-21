import type { ComponentProps } from "react";
import { Input } from "./Input";

export function DatePicker(props: Omit<ComponentProps<typeof Input>, "type">) {
  return <Input type="date" {...props} />;
}
