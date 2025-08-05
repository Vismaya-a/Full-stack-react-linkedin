import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage, { loader } from "./pages/ArticlePage";
import Layout from "./layout";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";

// Import the functions you need from the SDKs you need


const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/articles",
        element: <ArticlesListPage />,
      },
      {
        path: "/articles/:name",
        element: <ArticlePage />,

        loader: loader,
      },
      {
        path:"/login",
        element:<LoginPage />
      },
      {
        path:"/create-account",
        element:<CreateAccountPage  />
      }
    ],
  },
];

const router = createBrowserRouter(routes);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
