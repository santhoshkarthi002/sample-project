import FormContainer from "@/components/FormContainer";
import { LoginPage } from "../components";
import { useForm } from "react-hook-form";
import { LoginData } from "../types";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "@/axios";

const Login = () => {
  const formCtx = useForm<LoginData>({
    mode: "onChange",
    delayError: 500,
  });

  const navigate = useNavigate();

  const onSubmit = (data: LoginData) => {
    axiosInstance
      .post("/auth/login", data)
      .then((res) => {
        localStorage.setItem("isAuthenticated", res.data.token);
        navigate("/products/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-[500px] md:bg-gray-100 p-6 rounded-lg">
        <FormContainer methods={formCtx} onSubmit={onSubmit}>
          <LoginPage />
        </FormContainer>
      </div>
    </div>
  );
};

export default Login;
