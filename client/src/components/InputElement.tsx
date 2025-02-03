import {
    Controller,
    FieldError,
    RegisterOptions,
    useFormContext,
  } from "react-hook-form";
  
  interface InputElemetProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string; // Optional placeholder
    validationRules?: RegisterOptions; // Optional validation rules
    error?: FieldError; // Optional error message
  }
  
  const InputElement = ({
    label,
    name,
    type = "text",
    validationRules,
    error,
    placeholder,
  }: InputElemetProps) => {
    const { control } = useFormContext(); // Access the form context directly
  
    // Determine border color based on validation error
    const borderColor = error
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:ring-blue-500";
  
    return (
      <div className="mb-4">
        <label  className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <Controller
          name={name}
          control={control}
          rules={validationRules}
          render={({ field }) => (
            <input
              {...field} // Spread the field props for value, onChange, onBlur
              placeholder={placeholder}
              type={type}
              value={field.value ?? ""}
              className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${borderColor}`}
            />
          )}
        />
        {error && <p className="text-red-500 text-xs">{error.message}</p>}{" "}
      </div>
    );
  };
  
  export default InputElement;
  