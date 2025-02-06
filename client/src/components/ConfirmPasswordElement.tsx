import { Controller, useFormContext } from "react-hook-form";

interface ConfirmPasswordProps {
  label: string;
  name: string;
  passwordField: string; // Reference to the original password field
}

const ConfirmPasswordElement = ({ label, name, passwordField }: ConfirmPasswordProps) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const passwordValue = watch(passwordField); // Get password value

  return (
    <div className="mb-4 w-full">
      <label className={`block text-sm font-medium ${errors[name] ? "text-red-500" : "text-gray-700"}`}>
        {label} <span className={errors[name] ? "text-red-500" : "text-gray-700"}>*</span>
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: `${label} is required`,
          validate: (value) => value === passwordValue || "Passwords do not match",
        }}
        render={({ field }) => (
          <input
            {...field}
            type="password"
            className={`mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors[name] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
          />
        )}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]?.message as string}</p>}
    </div>
  );
};

export default ConfirmPasswordElement;
