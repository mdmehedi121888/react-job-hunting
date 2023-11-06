import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const {error,status} = useRouteError();
  // console.error(error.message,status);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
        <br></br>
        <i>status code: {status}</i>
      </p>
    </div>
  );
}