import { InputForm } from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";

export const FormRegistrasi = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Julius Novachrono"
        name="name"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="jNovachrono55@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirmPassword"
      />

      <Button classname="bg-blue-500 w-full">Register</Button>
    </form>
  );
};
