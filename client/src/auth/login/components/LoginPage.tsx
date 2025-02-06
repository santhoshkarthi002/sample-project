import ButtonElement from "@/components/ButtonElement";
import InputElement from "@/components/InputElement";

export const LoginPage = () => {
  return (
    <div>
      <InputElement label="Email" name="email" type="email" required />
      <InputElement label="Password" name="password" type="password" required />
      <ButtonElement type="submit">Login</ButtonElement>
    </div>
  );
};
