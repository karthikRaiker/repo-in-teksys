import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter basename="demo">
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)} style={{ cursor: "pointer" }}>
          {login ? "Logout" : "Login"}
        </button>
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/profile" Component={Profile} /> */}
          {/* profile component is prorected route | you can access profile component only when logged in */}
          <Route
            path="/profile"
            element={login ? <Profile /> : <Navigate to="/" replace />}
          />

          <Route path="/about" Component={About} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
