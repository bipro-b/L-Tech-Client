import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AuthProvider from "./Contexts/AuthProvider";
import About from "./pages/About/About/About";
import Contact from "./pages/Contact/Contact";

import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Enroll from "./pages/Home/Enroll/Enroll";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Logging/Login/Login";
import PrivateRoute from "./pages/Logging/PrivateRoute/PrivateRoute";
import Register from "./pages/Logging/Register/Register";
import NotFound from "./pages/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/:bookId"
              element={
                <PrivateRoute>
                  <Enroll />
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
