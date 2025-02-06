import FormContainer from "@/components/FormContainer";
import { useForm } from "react-hook-form";
import { RegisterPage } from "../components";
import { RegisterData } from "../types";

const Register = () => {
  const formCtx = useForm<RegisterData>({
    mode: "onChange",
    delayError: 500,
  });

  const onSubmit = (data: RegisterData) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-[500px] md:bg-gray-100 p-6 rounded-lg">
        <FormContainer methods={formCtx} onSubmit={onSubmit}>
          <RegisterPage />
        </FormContainer>
      </div>
    </div>
  );
};

export default Register;
