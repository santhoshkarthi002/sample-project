import { FormProvider, UseFormReturn } from "react-hook-form";

interface FormContainerProps {
  methods: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ methods, onSubmit, children }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 p-4">
        {children}
      </form>
    </FormProvider>
  );
};

export default FormContainer;
