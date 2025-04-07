import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Provider } from "react-redux";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import RestaurantMenu from "./pages/RestaurantMenu.jsx";
import appStore from "./utils/store/appStore.jsx";
<<<<<<< HEAD
=======
import Cart from "./pages/Cart.jsx";
>>>>>>> ep12

// lazy load the Grocery module.
const Grocery = lazy(() => import("./components/Grocery.jsx"));

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);