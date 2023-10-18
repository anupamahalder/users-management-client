import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    }
])

export default MyRoute;