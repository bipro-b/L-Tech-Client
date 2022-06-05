import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import About from "./pages/About/About/About";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/Notfound/Notfound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*"  element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
