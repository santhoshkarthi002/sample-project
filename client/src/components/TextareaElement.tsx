import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  validationRules?: RegisterOptions;
}

const TextareaElement = ({ label, name, placeholder, rows = 4, required = false, validationRules = {} }: TextareaProps) => {
  const { control, formState: { errors } } = useFormContext();

  const rules: RegisterOptions = {
    ...validationRules,
    ...(required && { required: `${label} is required` }),
  };

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="mb-4 w-full">
      <label className={`block text-sm font-medium ${error ? "text-red-500" : "text-gray-700"}`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <textarea
            {...field}
            value={field.value || ""}
            placeholder={placeholder}
            rows={rows}
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
        )}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default TextareaElement;
