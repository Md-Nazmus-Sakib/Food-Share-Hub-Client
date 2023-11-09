import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import FoodDetails from "../Component/FoodDetails/FoodDetails";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFood from "../Pages/ManageMyFood/ManageMyFood";
import PrivateRoute from "./PrivateRoute";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://food-share-hub-server.vercel.app/feature-food')
            },
            {
                path: "/available",
                element: <AvailableFoods></AvailableFoods>

            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFood></AddFood>
                </PrivateRoute>
            },
            {
                path: "/manageMyFood",
                element: <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>

            },
            {
                path: "/myRequest",
                element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>

            },
            {
                path: "/food/:id",
                element: <PrivateRoute> <FoodDetails></FoodDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-share-hub-server.vercel.app/food/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ],
    },
]);
