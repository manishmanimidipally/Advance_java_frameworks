import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const API = "http://localhost:8080/api";

function AdminDashboard() {

    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [appointments, setAppointments] = useState([]);

    const [activeSection, setActiveSection] = useState("overview");

    // -----------------------------
    // GET DATA
    // -----------------------------

    const getPatients = async () => {
        try {
            const response = await axios.get(`${API}/patients`);
            setPatients(response.data);
        } catch (error) {
            console.error("Patients error:", error);
        }
    };

    const getDoctors = async () => {
        try {
            const response = await axios.get(`${API}/doctors`);
            setDoctors(response.data);
        } catch (error) {
            console.error("Doctors error:", error);
        }
    };

    const getDepartments = async () => {
        try {
            const response = await axios.get(`${API}/departments`);
            setDepartments(response.data);
        } catch (error) {
            console.error("Departments error:", error);
        }
    };

    const getAppointments = async () => {
        try {
            const response = await axios.get(`${API}/appointments`);
            setAppointments(response.data);
        } catch (error) {
            console.error("Appointments error:", error);
        }
    };

    useEffect(() => {
        getPatients();
        getDoctors();
        getDepartments();
        getAppointments();
    }, []);


    // -----------------------------
    // DELETE PATIENT
    // -----------------------------

    const deletePatient = async (id) => {

        if (!window.confirm("Delete this patient?")) {
            return;
        }

        try {

            await axios.delete(`${API}/patients/${id}`);

            getPatients();

        } catch (error) {

            console.error(error);

            alert("Unable to delete patient");
        }
    };


    // -----------------------------
    // DELETE DOCTOR
    // -----------------------------

    const deleteDoctor = async (id) => {

        if (!window.confirm("Delete this doctor?")) {
            return;
        }

        try {

            await axios.delete(`${API}/doctors/${id}`);

            getDoctors();

        } catch (error) {

            console.error(error);

            alert("Unable to delete doctor");
        }
    };


    // -----------------------------
    // DELETE DEPARTMENT
    // -----------------------------

    const deleteDepartment = async (id) => {

        if (!window.confirm("Delete this department?")) {
            return;
        }

        try {

            await axios.delete(`${API}/departments/${id}`);

            getDepartments();

        } catch (error) {

            console.error(error);

            alert("Unable to delete department");
        }
    };


    // -----------------------------
    // DELETE APPOINTMENT
    // -----------------------------

    const deleteAppointment = async (id) => {

        if (!window.confirm("Delete this appointment?")) {
            return;
        }

        try {

            await axios.delete(`${API}/appointments/${id}`);

            getAppointments();

        } catch (error) {

            console.error(error);

            alert("Unable to delete appointment");
        }
    };


    return (

        <div className="admin-page">

            {/* ================= HEADER ================= */}

            <header className="admin-header">

                <div className="admin-logo">

                    <div className="admin-logo-icon">
                        ⚙
                    </div>

                    <div>
                        <h2>CarePlus</h2>
                        <span>Admin Portal</span>
                    </div>

                </div>


                <nav>

                    <a href="/">
                        Home
                    </a>

                    <a href="/patient">
                        Patient
                    </a>

                    <a href="/doctor">
                        Doctor
                    </a>

                    <a
                        href="/admin"
                        className="active"
                    >
                        Admin
                    </a>

                </nav>

            </header>


            {/* ================= MAIN ================= */}

            <main className="admin-container">

                {/* Welcome */}

                <div className="admin-welcome">

                    <div>

                        <p className="admin-label">
                            ADMIN PORTAL
                        </p>

                        <h1>
                            Hospital Management
                        </h1>

                        <p>
                            Manage patients, doctors,
                            departments and appointments.
                        </p>

                    </div>

                    <div className="admin-badge">
                        ⚙ Administrator
                    </div>

                </div>


                {/* ================= STATISTICS ================= */}

                <div className="admin-stats">

                    <div
                        className="admin-stat"
                        onClick={() =>
                            setActiveSection("patients")
                        }
                    >

                        <div className="admin-stat-icon blue">
                            👥
                        </div>

                        <div>
                            <span>Total Patients</span>
                            <strong>
                                {patients.length}
                            </strong>
                        </div>

                    </div>


                    <div
                        className="admin-stat"
                        onClick={() =>
                            setActiveSection("doctors")
                        }
                    >

                        <div className="admin-stat-icon green">
                            ⚕
                        </div>

                        <div>
                            <span>Total Doctors</span>
                            <strong>
                                {doctors.length}
                            </strong>
                        </div>

                    </div>


                    <div
                        className="admin-stat"
                        onClick={() =>
                            setActiveSection("departments")
                        }
                    >

                        <div className="admin-stat-icon purple">
                            🏢
                        </div>

                        <div>
                            <span>Departments</span>
                            <strong>
                                {departments.length}
                            </strong>
                        </div>

                    </div>


                    <div
                        className="admin-stat"
                        onClick={() =>
                            setActiveSection("appointments")
                        }
                    >

                        <div className="admin-stat-icon orange">
                            📅
                        </div>

                        <div>
                            <span>Appointments</span>
                            <strong>
                                {appointments.length}
                            </strong>
                        </div>

                    </div>

                </div>


                {/* ================= MENU ================= */}

                <div className="admin-menu">

                    <button
                        className={
                            activeSection === "overview"
                                ? "menu-active"
                                : ""
                        }
                        onClick={() =>
                            setActiveSection("overview")
                        }
                    >
                        Overview
                    </button>

                    <button
                        className={
                            activeSection === "patients"
                                ? "menu-active"
                                : ""
                        }
                        onClick={() =>
                            setActiveSection("patients")
                        }
                    >
                        Patients
                    </button>

                    <button
                        className={
                            activeSection === "doctors"
                                ? "menu-active"
                                : ""
                        }
                        onClick={() =>
                            setActiveSection("doctors")
                        }
                    >
                        Doctors
                    </button>

                    <button
                        className={
                            activeSection === "departments"
                                ? "menu-active"
                                : ""
                        }
                        onClick={() =>
                            setActiveSection("departments")
                        }
                    >
                        Departments
                    </button>

                    <button
                        className={
                            activeSection === "appointments"
                                ? "menu-active"
                                : ""
                        }
                        onClick={() =>
                            setActiveSection("appointments")
                        }
                    >
                        Appointments
                    </button>

                </div>


                {/* ================= OVERVIEW ================= */}

                {activeSection === "overview" && (

                    <section className="admin-card">

                        <div className="admin-card-heading">

                            <div>
                                <h2>Hospital Overview</h2>

                                <p>
                                    Current hospital management summary
                                </p>
                            </div>

                        </div>


                        <div className="overview-grid">

                            <div>
                                <span>Patients</span>
                                <strong>
                                    {patients.length}
                                </strong>
                            </div>

                            <div>
                                <span>Doctors</span>
                                <strong>
                                    {doctors.length}
                                </strong>
                            </div>

                            <div>
                                <span>Departments</span>
                                <strong>
                                    {departments.length}
                                </strong>
                            </div>

                            <div>
                                <span>Appointments</span>
                                <strong>
                                    {appointments.length}
                                </strong>
                            </div>

                        </div>

                    </section>

                )}


                {/* ================= PATIENTS ================= */}

                {activeSection === "patients" && (

                    <section className="admin-card">

                        <div className="admin-card-heading">

                            <div>
                                <h2>Manage Patients</h2>

                                <p>
                                    View and manage registered patients
                                </p>
                            </div>

                            <span className="count-badge">
                                {patients.length} Patients
                            </span>

                        </div>


                        <div className="admin-table">

                            <table>

                                <thead>

                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {patients.map(patient => (

                                        <tr key={patient.id}>

                                            <td>
                                                {patient.id}
                                            </td>

                                            <td>
                                                <strong>
                                                    {patient.name}
                                                </strong>
                                            </td>

                                            <td>
                                                {patient.age}
                                            </td>

                                            <td>
                                                {patient.gender}
                                            </td>

                                            <td>
                                                {patient.phone}
                                            </td>

                                            <td>
                                                {patient.email}
                                            </td>

                                            <td>

                                                <button
                                                    className="delete-btn"
                                                    onClick={() =>
                                                        deletePatient(
                                                            patient.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </section>

                )}


                {/* ================= DOCTORS ================= */}

                {activeSection === "doctors" && (

                    <section className="admin-card">

                        <div className="admin-card-heading">

                            <div>
                                <h2>Manage Doctors</h2>

                                <p>
                                    View and manage hospital doctors
                                </p>
                            </div>

                            <span className="count-badge green-badge">
                                {doctors.length} Doctors
                            </span>

                        </div>


                        <div className="admin-table">

                            <table>

                                <thead>

                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Specialization</th>
                                        <th>Qualification</th>
                                        <th>Experience</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {doctors.map(doctor => (

                                        <tr key={doctor.id}>

                                            <td>
                                                {doctor.id}
                                            </td>

                                            <td>
                                                <strong>
                                                    {doctor.name}
                                                </strong>
                                            </td>

                                            <td>
                                                {doctor.specialization}
                                            </td>

                                            <td>
                                                {doctor.qualification}
                                            </td>

                                            <td>
                                                {doctor.experienceYears}
                                                {" "}years
                                            </td>

                                            <td>

                                                <button
                                                    className="delete-btn"
                                                    onClick={() =>
                                                        deleteDoctor(
                                                            doctor.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </section>

                )}


                {/* ================= DEPARTMENTS ================= */}

                {activeSection === "departments" && (

                    <section className="admin-card">

                        <div className="admin-card-heading">

                            <div>
                                <h2>Manage Departments</h2>

                                <p>
                                    Manage hospital departments
                                </p>
                            </div>

                            <span className="count-badge purple-badge">
                                {departments.length} Departments
                            </span>

                        </div>


                        <div className="admin-table">

                            <table>

                                <thead>

                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {departments.map(department => (

                                        <tr key={department.id}>

                                            <td>
                                                {department.id}
                                            </td>

                                            <td>
                                                <strong>
                                                    {department.name}
                                                </strong>
                                            </td>

                                            <td>
                                                {department.description}
                                            </td>

                                            <td>

                                                <button
                                                    className="delete-btn"
                                                    onClick={() =>
                                                        deleteDepartment(
                                                            department.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </section>

                )}


                {/* ================= APPOINTMENTS ================= */}

                {activeSection === "appointments" && (

                    <section className="admin-card">

                        <div className="admin-card-heading">

                            <div>
                                <h2>Manage Appointments</h2>

                                <p>
                                    Monitor all hospital appointments
                                </p>
                            </div>

                            <span className="count-badge orange-badge">
                                {appointments.length} Appointments
                            </span>

                        </div>


                        <div className="admin-table">

                            <table>

                                <thead>

                                    <tr>
                                        <th>ID</th>
                                        <th>Patient</th>
                                        <th>Doctor</th>
                                        <th>Date & Time</th>
                                        <th>Reason</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {appointments.map(
                                        appointment => (

                                            <tr
                                                key={
                                                    appointment.id
                                                }
                                            >

                                                <td>
                                                    {
                                                        appointment.id
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        appointment
                                                            .patient
                                                            ?.name
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        appointment
                                                            .doctor
                                                            ?.name
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        new Date(
                                                            appointment.appointmentDate
                                                        ).toLocaleString(
                                                            "en-IN"
                                                        )
                                                    }
                                                </td>

                                                <td>
                                                    {
                                                        appointment.reason
                                                    }
                                                </td>

                                                <td>

                                                    <span
                                                        className={
                                                            `status ${appointment.status?.toLowerCase()}`
                                                        }
                                                    >
                                                        {
                                                            appointment.status
                                                        }
                                                    </span>

                                                </td>

                                                <td>

                                                    <button
                                                        className="delete-btn"
                                                        onClick={() =>
                                                            deleteAppointment(
                                                                appointment.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>

                                                </td>

                                            </tr>

                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>

                    </section>

                )}

            </main>


            {/* ================= FOOTER ================= */}

            <footer className="admin-footer">

                <div>
                    <strong>⚙ CarePlus</strong>
                    <span> Admin Portal</span>
                </div>

                <p>
                    © 2026 CarePlus Hospital
                </p>

            </footer>

        </div>
    );
}

export default AdminDashboard;