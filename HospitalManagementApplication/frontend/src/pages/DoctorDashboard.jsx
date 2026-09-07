import { useEffect, useState } from "react";
import axios from "axios";
import "./DoctorDashboard.css";

const API = "http://localhost:8080/api";

function DoctorDashboard() {

    // For now, use doctor ID 1
    const doctorId = 2;

    const [doctor, setDoctor] = useState(null);
    const [appointments, setAppointments] = useState([]);

    // --------------------------------
    // GET DOCTOR
    // --------------------------------

    const getDoctor = async () => {

        try {

            const response = await axios.get(
                `${API}/doctors/${doctorId}`
            );

            setDoctor(response.data);

        } catch (error) {

            console.error(
                "Error loading doctor:",
                error
            );

        }
    };


    // --------------------------------
    // GET DOCTOR APPOINTMENTS
    // --------------------------------

    const getAppointments = async () => {

        try {

            const response = await axios.get(
                `${API}/appointments/doctor/${doctorId}`
            );

            setAppointments(response.data);

        } catch (error) {

            console.error(
                "Error loading appointments:",
                error
            );

        }
    };


    useEffect(() => {

        getDoctor();
        getAppointments();

    }, []);


    // --------------------------------
    // FORMAT DATE
    // --------------------------------

    const formatDate = (date) => {

        return new Date(date).toLocaleDateString(
            "en-IN"
        );
    };


    // --------------------------------
    // FORMAT TIME
    // --------------------------------

    const formatTime = (date) => {

        return new Date(date).toLocaleTimeString(
            "en-IN",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );
    };


    return (

        <div className="doctor-page">

            {/* ================= HEADER ================= */}

            <header className="doctor-header">

                <div className="doctor-logo">

                    <div className="doctor-logo-icon">
                        ⚕
                    </div>

                    <div>
                        <h2>CarePlus</h2>
                        <span>
                            Doctor Portal
                        </span>
                    </div>

                </div>


                <nav>

                    <a href="/">
                        Home
                    </a>

                    <a href="/patient">
                        Patient
                    </a>

                    <a
                        href="/doctor"
                        className="active"
                    >
                        Doctor
                    </a>

                    <a href="/admin">
                        Admin
                    </a>

                </nav>

            </header>


            {/* ================= MAIN ================= */}

            <main className="doctor-container">

                {/* Welcome */}

                <div className="doctor-welcome">

                    <div>

                        <p className="doctor-label">
                            DOCTOR PORTAL
                        </p>

                        <h1>
                            Doctor Dashboard
                        </h1>

                        <p>
                            Manage your patients,
                            appointments and daily schedule.
                        </p>

                    </div>


                    <div className="doctor-profile">

                        <div className="profile-icon">
                            ⚕
                        </div>

                        <div>

                            <strong>
                                {doctor
                                    ? doctor.name
                                    : "Loading..."}
                            </strong>

                            <span>
                                {doctor
                                    ? doctor.specialization
                                    : "Doctor"}
                            </span>

                        </div>

                    </div>

                </div>


                {/* ================= STATS ================= */}

                <div className="doctor-stats">

                    <div className="stat-card">

                        <div className="stat-icon">
                            📅
                        </div>

                        <div>

                            <span>
                                Today's Appointments
                            </span>

                            <strong>
                                {appointments.length}
                            </strong>

                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon green">
                            👥
                        </div>

                        <div>

                            <span>
                                Total Patients
                            </span>

                            <strong>
                                {appointments.length}
                            </strong>

                        </div>

                    </div>


                    <div className="stat-card">

                        <div className="stat-icon purple">
                            ✓
                        </div>

                        <div>

                            <span>
                                Completed
                            </span>

                            <strong>
                                {
                                    appointments.filter(
                                        a =>
                                            a.status ===
                                            "COMPLETED"
                                    ).length
                                }
                            </strong>

                        </div>

                    </div>

                </div>


                {/* ================= APPOINTMENTS ================= */}

                <section className="appointments-card">

                    <div className="card-heading">

                        <div>

                            <h2>
                                Today's Appointments
                            </h2>

                            <p>
                                View your scheduled patients
                            </p>

                        </div>

                        <span className="appointment-count">
                            {appointments.length} Appointments
                        </span>

                    </div>


                    {appointments.length === 0 ? (

                        <div className="no-appointments">

                            <div>
                                📅
                            </div>

                            <h3>
                                No Appointments
                            </h3>

                            <p>
                                You don't have any
                                scheduled appointments.
                            </p>

                        </div>

                    ) : (

                        <div className="appointment-table">

                            <table>

                                <thead>

                                    <tr>

                                        <th>
                                            Patient
                                        </th>

                                        <th>
                                            Date
                                        </th>

                                        <th>
                                            Time
                                        </th>

                                        <th>
                                            Reason
                                        </th>

                                        <th>
                                            Status
                                        </th>

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

                                                    <div className="patient-name">

                                                        <div className="patient-avatar">
                                                            {appointment
                                                                .patient
                                                                ?.name
                                                                ?.charAt(
                                                                    0
                                                                )}
                                                        </div>

                                                        <strong>
                                                            {
                                                                appointment
                                                                    .patient
                                                                    ?.name
                                                            }
                                                        </strong>

                                                    </div>

                                                </td>


                                                <td>
                                                    {
                                                        formatDate(
                                                            appointment.appointmentDate
                                                        )
                                                    }
                                                </td>


                                                <td>

                                                    <strong>
                                                        {
                                                            formatTime(
                                                                appointment.appointmentDate
                                                            )
                                                        }
                                                    </strong>

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

                                            </tr>

                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>

                    )}

                </section>


                {/* ================= PATIENT INFORMATION ================= */}

                <section className="patient-info-card">

                    <div className="card-heading">

                        <div>

                            <h2>
                                Patient Information
                            </h2>

                            <p>
                                Details of your scheduled patients
                            </p>

                        </div>

                    </div>


                    <div className="patient-grid">

                        {appointments.map(
                            appointment => (

                                <div
                                    className="patient-card"
                                    key={
                                        appointment.id
                                    }
                                >

                                    <div className="large-avatar">

                                        {
                                            appointment
                                                .patient
                                                ?.name
                                                ?.charAt(0)
                                        }

                                    </div>


                                    <div className="patient-details">

                                        <h3>
                                            {
                                                appointment
                                                    .patient
                                                    ?.name
                                            }
                                        </h3>

                                        <p>
                                            Appointment:
                                            {" "}
                                            {
                                                formatDate(
                                                    appointment.appointmentDate
                                                )
                                            }
                                        </p>

                                        <p>
                                            Time:
                                            {" "}
                                            {
                                                formatTime(
                                                    appointment.appointmentDate
                                                )
                                            }
                                        </p>

                                        <p>
                                            Reason:
                                            {" "}
                                            {
                                                appointment.reason
                                            }
                                        </p>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </section>

            </main>


            {/* ================= FOOTER ================= */}

            <footer className="doctor-footer">

                <div>
                    <strong>
                        ⚕ CarePlus
                    </strong>

                    <span>
                        Doctor Portal
                    </span>
                </div>

                <p>
                    © 2026 CarePlus Hospital
                </p>

            </footer>

        </div>
    );
}

export default DoctorDashboard;