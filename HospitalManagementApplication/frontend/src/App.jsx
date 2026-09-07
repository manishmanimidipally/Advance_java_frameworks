import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/patient"
                    element={<PatientDashboard />}
                />

                <Route
                    path="/doctor"
                    element={<DoctorDashboard />}
                />

                <Route
                    path="/admin"
                    element={<AdminDashboard />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;