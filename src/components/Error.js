import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <h1>Oops...</h1>
      <h2>{error.data}</h2>
      <h3>
        {error.status} : {error.statusText}
      </h3>
    </div>
  );
};
export default Error;
