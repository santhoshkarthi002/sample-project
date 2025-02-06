import FormContainer from "@/components/FormContainer";
import { LoginPage } from "../components";
import { useForm } from "react-hook-form";
import { LoginData } from "../types";

const Login = () => {
  const formCtx = useForm<LoginData>({
    mode: "onChange",
    delayError: 500,
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
  };

  return (
    <div>
      <FormContainer methods={formCtx} onSubmit={onSubmit}>
        <LoginPage />
      </FormContainer>
    </div>
  );
};

export default Login;
