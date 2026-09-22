import { forwardRef, type ComponentProps } from "react";
import { Input } from "@share/components/ui/input";

export interface FormFieldProps extends ComponentProps<typeof Input> {
  label: string;
  error?: string | null;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <label className="block text-sm font-medium text-primary-dark">
        {label}
        <Input className="mt-2" ref={ref} {...props} />
        {error ? <span className="mt-1 block text-xs font-medium text-red-600">{error}</span> : null}
      </label>
    );
  },
);

FormField.displayName = "FormField";

export default FormField;
