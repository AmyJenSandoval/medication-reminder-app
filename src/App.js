import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./modules/home/components/Navigation";
import { Home } from "./modules/home/components/Home";
import { homePath } from "./modules/home/routes/HomeRoute";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path={homePath} element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
