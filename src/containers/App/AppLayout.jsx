import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const mainMessage = useSelector((state) => state.app.mainMessage);
  return (
    <div className="app-content">
      <header>
        <h1 className="text-3xl font-bold underline">Tic-tac-toe</h1>
      </header>
      <div className="navigation">
        <Link to={`/`} className="button">
          Home
        </Link>

        <Link to={`edit-page`} className="button">
          Edit Page
        </Link>
      </div>
      <div className="gobal-message">{mainMessage}</div>
      <div className="page-content">
        <Outlet />
      </div>
      <footer>YVG</footer>
    </div>
  );
};

export default AppLayout;
