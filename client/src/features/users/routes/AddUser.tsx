/* eslint-disable @typescript-eslint/no-explicit-any */
import FormContainer from "@/components/FormContainer";
import { useForm } from "react-hook-form";
import { AddUserPage } from "../components";

const AddUser = () => {
  const formCtx = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <FormContainer methods={formCtx} onSubmit={onSubmit}>
        <AddUserPage />
      </FormContainer>
    </div>
  );
};

export default AddUser;
