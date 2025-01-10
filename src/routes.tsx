import { RouteObject } from "react-router-dom"
import Comments from "./pages/Comments"
import Loginpage from "./pages/Loginpage"
import Dashboard from "./pages/Dashboard"
import Messages from "./pages/Messages"
import Tables from "./pages/Tables"
import Tasks from "./pages/Tasks"
import Wallet from "./pages/Wallet"

const routes : RouteObject[] = [
    { path : "/" , element : <Dashboard />},
    { path : "/wallet" , element : <Wallet />},
    { path : "/comments" , element : <Comments />},
    { path : "/messages" , element : <Messages />},
    { path : "/tables" , element : <Tables />},
    { path : "/tasks" , element : <Tasks />},
    { path : "/login" , element : <Loginpage />}
]

export default routes