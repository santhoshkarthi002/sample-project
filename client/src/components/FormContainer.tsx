import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

interface FormContainerProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
}

const FormContainer = <T extends FieldValues>({ methods, onSubmit, children }: FormContainerProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 p-4">
        {children}
      </form>
    </FormProvider>
  );
};

export default FormContainer;
