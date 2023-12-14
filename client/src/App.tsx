import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Header } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
