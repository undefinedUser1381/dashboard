import routes from "./routes";
import { useRoutes } from "react-router-dom";
function App() {
  const router = useRoutes(routes);

  return (
    <div className="dark">
      {router}
    </div>
  );
}

export default App;
