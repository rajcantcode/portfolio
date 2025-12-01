import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "@fontsource/raleway/400.css";
import "@fontsource/raleway/latin-400.css";

import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/projects"
            element={<Projects showHeader={true} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
