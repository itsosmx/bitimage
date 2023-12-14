import { Routes as DomRoutes, Route } from "react-router-dom";
import Home from "./home";
import Post from "./post";

export default function Routes() {
  return (
    <DomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
    </DomRoutes>
  );
}
