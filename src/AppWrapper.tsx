import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./stores/store";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AppWrapper() {
  const themeMode = useSelector(
    (state: RootState) => state.theme.isDarkMode
  );
  const token = useSelector((state : RootState) => state.auth.token)

  const navigate = useNavigate()

  useEffect(() => {
    const isToken = Cookies.get("token")
    if(!isToken){
       navigate("login")
    }else{
      navigate("/")
    }
  },[token])

  const router = useRoutes(routes);

  return (
    <div className={`${themeMode ? "dark" : ""}`}>
      {router}
    </div>
  );
}

export default AppWrapper;
