import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import RestaurantMenu from "./pages/RestaurantMenu.jsx";

// lazy load the Grocery module.
const Grocery = lazy(() => import("./components/Grocery.jsx"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children : [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={(<div>Loading Grocery Module...</div>)}>
                    <Grocery />
                </Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);