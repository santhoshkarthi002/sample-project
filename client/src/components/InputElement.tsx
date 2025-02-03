import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

interface InputElementProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  validationRules?: RegisterOptions; // Custom validation rules
}

const InputElement = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  validationRules = {},
}: InputElementProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // Access form state for validation errors

  // Merge required validation if the field is required
  const rules: RegisterOptions = {
    ...validationRules,
    ...(required && { required: `${label} is required` }), // Add required rule if needed
  };

  const error = errors[name]?.message as string | undefined; // Extract error message

  return (
    <div className="mb-4 w-full">
      <label
        className={`block text-sm font-medium ${
          error ? "text-red-500" : "text-gray-700"
        } `}
      >
        {label}{" "}
        {required && (
          <span className={error ? "text-red-500" : "text-gray-700"}>*</span>
        )}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            placeholder={placeholder}
            type={type}
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
        )}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputElement;
