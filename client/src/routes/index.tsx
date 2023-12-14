import { Routes as DomRoutes, Route } from "react-router-dom";
import Home from "./home";
import Post from "./post";
import ErrorPage from "./error";

export default function Routes() {
  return (
    <DomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="*" element={<ErrorPage />} />
    </DomRoutes>
  );
}
