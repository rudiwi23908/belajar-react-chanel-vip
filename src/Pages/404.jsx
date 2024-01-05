import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1>Ooops!!!</h1>
      <p>Sorry, an unexpected error has occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
