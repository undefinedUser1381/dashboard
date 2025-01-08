import SideBar from "./components/SideBar/SideBar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routes);

  return <>{router}
  <SideBar />
  </>;
}

export default App;
