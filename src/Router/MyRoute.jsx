import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Users from "../components/Users";

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: 'users',
        element: <Users></Users>,
        // read data from database 
        loader: () => fetch('http://localhost:5000/users')
    }
])

export default MyRoute;