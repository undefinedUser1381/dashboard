import { RouteObject } from "react-router-dom"
import Profilepage from "./pages/Profilepage"
import Loginpage from "./pages/Loginpage"
import Dashboardpage from "./pages/Dashboardpage"
import Articles from "./pages/ArticlePage"
import Tables from "./pages/Tables"
import Tasks from "./pages/Tasks"
import Users from "./pages/Users"

const routes : RouteObject[] = [
    { path : "/" , element : <Dashboardpage /> },
    { path : "users" , element : <Users />},
    { path : "profile" , element : <Profilepage />},
    { path : "articles" , element : <Articles />},
    { path : "tables" , element : <Tables />},
    { path : "tasks" , element : <Tasks />},
    { path : "login" , element : <Loginpage />}
]

export default routes