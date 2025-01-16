import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./stores/store";

function AppWrapper() {
  const themeMode = useSelector(
    (state: RootState) => state.theme.isDarkMode
  );

  const router = useRoutes(routes);

  return (
    <div className={`${themeMode ? "dark" : ""}`}>
      {router}
    </div>
  );
}

export default AppWrapper;
