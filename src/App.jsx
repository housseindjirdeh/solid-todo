import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

const Home = lazy(() => import("./pages/HomePage"));
const Retro = lazy(() => import("./pages/RetroPage"));

function App() {
  return (
    <div class="container mx-auto px-4 py-8 h-full flex flex-1 flex-col space-y-8">
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/retro/:id" component={Retro} />
      </Routes>
    </div>
  );
}

export default App;
