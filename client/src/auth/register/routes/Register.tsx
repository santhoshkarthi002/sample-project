import FormContainer from "@/components/FormContainer";
import { useForm } from "react-hook-form";
import { RegisterPage } from "../components";
import { RegisterData } from "../types";
import { axiosInstance } from "@/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const formCtx = useForm<RegisterData>({
    mode: "onChange",
    delayError: 500,
  });

  const navigate = useNavigate();

  const onSubmit = (data: RegisterData) => {
    axiosInstance
      .post("/register", data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
