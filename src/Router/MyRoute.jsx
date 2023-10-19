import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Users from "../components/Users";
import Update from "../components/Update";

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
    },
    {
        path: '/update/:id',
        element: <Update></Update>,
        // to update a specific thing we have to load that thing 
        // to load a spefic data we have to create an api to backend 
        loader: ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
    }
])

export default MyRoute;