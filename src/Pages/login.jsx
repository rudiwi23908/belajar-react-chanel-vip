import { AuthLayout } from "../components/Layouts/AuthLayout";
import { FormLogin } from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <AuthLayout title="Welcome, please login first" header="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don't have an account?
        <Link to="/register" className="font-bold text-blue-600">
          {" "}
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};
