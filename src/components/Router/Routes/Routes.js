import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import ServiceAll from "../../Pages/Services/ServiceAll";
import ServiceDetails from "../../Pages/SeviceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUP/SignUp";
import PrivateRoute from "../PrivateRouter/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <ServiceAll></ServiceAll>,

            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,

            },
            {
                path: '/addService',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,

            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
        ]
    },
    {
        path: "/*",
        element: <div><img className='d-flex mx-auto' src="https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design.png.webp" alt="" /></div>,
    },
])

export default router;