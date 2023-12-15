import React from "react"
import { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./Components/Header"
import { Body } from "./Components/Body"
import { Outlet, createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import RestaurentsDetails from "./Components/RestaurentsDetails"
// import Grocery from "./Components/Grocery"
import { lazy } from "react"
const Grocery = lazy(() => import("./Components/Grocery"))
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentsDetails />,
      },
      {
        path: "/restaurents/grocery",
        element: (
          <Suspense fallback={<h1>Loading ⏳</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
