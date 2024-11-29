import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./firebase/config.js";
import "./firebase/config.js";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Layout from "./layouts/Layout";
import Events from "./pages/Events.jsx";
import Memories from "./pages/Memories.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
