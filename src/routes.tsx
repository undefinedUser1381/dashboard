import { RouteObject } from "react-router-dom"
import Profilepage from "./pages/Profilepage"
import Loginpage from "./pages/Loginpage"
import Dashboardpage from "./pages/Dashboardpage"
import Messages from "./pages/Messages"
import Tables from "./pages/Tables"
import Tasks from "./pages/Tasks"
import Wallet from "./pages/Wallet"

const routes : RouteObject[] = [
    { path : "/" , element : <Dashboardpage /> },
    { path : "wallet" , element : <Wallet />},
    { path : "profile" , element : <Profilepage />},
    { path : "messages" , element : <Messages />},
    { path : "tables" , element : <Tables />},
    { path : "tasks" , element : <Tasks />},
    { path : "login" , element : <Loginpage />}
]

export default routes