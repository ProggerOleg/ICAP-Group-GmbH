import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleProject from "./pages/SingleProject";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="project" element={<SingleProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
