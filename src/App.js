import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './pages/login.jsx'
import { Home } from "./pages/home.jsx";
import { Navbar } from "./components/navbar.jsx";
import './App.css';

function App() {
  return (
    <div>
            <BrowserRouter>
              <Navbar />
              <div style={{minHeight: "100vh"}}>
                  <Routes>
                      <Route element={<Home />} path="/" />
                      <Route element={<Login />} path="/login" />
                      {/* <Route element={<Signup />} path="/signup" />
                      <Route element={<Profile />} path="/profile/:user_id" />
                      <Route element={<LessonForm />} path="/lessons" />
                      <Route element={<Canchas />} path="/canchas" />
                      <Route element={<Reservations />} path="/reservations/:id" />
                      <Route element={<ExploreProfile />} path="/exploreProfile/:user_id" /> */}
                      <Route element={<h1>Not found!</h1>} />
                  </Routes>
              </div>
            </BrowserRouter>
        </div>
  );
}

export default App;
