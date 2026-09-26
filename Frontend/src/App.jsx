import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import RequirementForm from "./pages/RequirementForm/RequirementForm";
import GeneratedProjects from "./pages/GeneratedProjects/GeneratedProjects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Home/>} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/requirement" element={<RequirementForm />} />

      <Route path="/projects" element={<GeneratedProjects />} />

      <Route path="/project-details" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;