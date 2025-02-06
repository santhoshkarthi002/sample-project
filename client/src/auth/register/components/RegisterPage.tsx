import ButtonElement from "@/components/ButtonElement";
import ConfirmPasswordElement from "@/components/ConfirmPasswordElement";
import InputElement from "@/components/InputElement";

export const RegisterPage = () => {
  return (
    <div>
      <div className="text-center text-2xl font-bold my-8">Register</div>
      <InputElement label="User Name" name="userName" type="text" required />
      <InputElement label="Email" name="email" type="email" required />
      <InputElement label="Password" name="password" type="password" required />
      <ConfirmPasswordElement
        label="Confirm Password"
        name="confirmPassword"
        passwordField="password"
      />
      <ButtonElement type="submit" label="Register" width="full" />
      <div className="flex flex-col justify-center items-center mt-4">
        <p className="text-base text-[#827f7f]">
          You are already a member?{" "}
          <a href="/" className="text-primary hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
