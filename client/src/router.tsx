import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login.tsx";

export const router = createBrowserRouter([
  { path: "/", element: <h1>you're logged in.</h1> },
  { path: "auth", element: <Login /> },
]);
