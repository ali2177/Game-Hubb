import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>
              {isRouteErrorResponse(error)
                ? "404 - The Page can't be found"
                : "Unexpected Error"}
            </h2>
          </div>
          <Link to="/">Go TO Homepage</Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
