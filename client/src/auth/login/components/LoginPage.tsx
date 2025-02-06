import ButtonElement from "@/components/ButtonElement";
import InputElement from "@/components/InputElement";
import { MdOutlineLogin } from "react-icons/md";

export const LoginPage = () => {
  return (
    <div>
      <div className="text-center text-2xl font-bold my-8">Login</div>
      <InputElement
        name="email"
        label="Email"
        placeholder="Enter your email"
        required
      />
      <InputElement
        label="Password"
        name="password"
        placeholder="Enter your password"
        required
      />
      <div className="mt-4 mb-2">
        <ButtonElement
          type="submit"
          label="Login"
          icon={<MdOutlineLogin />}
          iconPosition="left"
          width="full"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <a className="text-base inline-block my-3 text-[#827f7f] hover:underline hover:text-primary">
          Forget Password?
        </a>
        <p className="text-base text-[#827f7f]">
          Not a member yet?{" "}
          <a href="/register" className="text-primary hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};
