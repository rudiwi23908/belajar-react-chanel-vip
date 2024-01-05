import { AuthLayout } from "../components/Layouts/AuthLayout";
import { FormRegistrasi } from "../components/Fragments/FormRegistrasi";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Welcome, Please enter your details" header="Registrasi">
      <FormRegistrasi />
      <p className="text-sm mt-5 text-center">
        Have an account?
        <Link to="/login" className="font-bold text-blue-600">
          {" "}
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};
