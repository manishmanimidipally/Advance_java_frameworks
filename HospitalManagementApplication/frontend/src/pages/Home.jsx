import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-page">

            {/* Header */}
            <header className="home-header">

                <div className="logo">
                    <div className="logo-icon">✚</div>

                    <div>
                        <h2>CarePlus</h2>
                        <span>Hospital Management</span>
                    </div>
                </div>

                <nav>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </nav>

            </header>


            {/* Hero Section */}
            <section className="hero">

                <div className="hero-content">

                    <p className="welcome">
                        WELCOME TO CAREPLUS
                    </p>

                    <h1>
                        Your Health,
                        <br />
                        <span>Our Priority.</span>
                    </h1>

                    <p className="hero-text">
                        A simple and secure hospital management system
                        connecting patients, doctors and administrators
                        in one place.
                    </p>

                    <div className="hero-buttons">

                        <Link to="/patient">
                            <button className="primary-btn">
                                Book an Appointment →
                            </button>
                        </Link>

                        <Link to="/doctor">
                            <button className="secondary-btn">
                                Doctor Portal
                            </button>
                        </Link>

                    </div>

                </div>


                {/* Hospital Card */}
                <div className="hospital-card">

                    <div className="hospital-icon">
                        ✚
                    </div>

                    <h2>
                        Quality Healthcare
                    </h2>

                    <p>
                        Manage appointments, doctors and
                        patients with ease.
                    </p>

                    <div className="stats">

                        <div>
                            <strong>24/7</strong>
                            <span>Support</span>
                        </div>

                        <div>
                            <strong>100%</strong>
                            <span>Secure</span>
                        </div>

                        <div>
                            <strong>Easy</strong>
                            <span>Access</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* Role Section */}
            <section className="roles" id="services">

                <p className="section-label">
                    GET STARTED
                </p>

                <h2>
                    Choose Your Portal
                </h2>

                <p className="section-description">
                    Select your role to access the hospital management system.
                </p>


                <div className="role-cards">

                    {/* Patient */}
                    <Link to="/patient" className="role-card">

                        <div className="role-icon patient-icon">
                            ♙
                        </div>

                        <div>
                            <h3>Patient</h3>

                            <p>
                                Find doctors, check availability
                                and book appointments.
                            </p>

                            <span>
                                Patient Portal →
                            </span>
                        </div>

                    </Link>


                    {/* Doctor */}
                    <Link to="/doctor" className="role-card">

                        <div className="role-icon doctor-icon">
                            ⚕
                        </div>

                        <div>
                            <h3>Doctor</h3>

                            <p>
                                View patients, appointments
                                and your daily schedule.
                            </p>

                            <span>
                                Doctor Portal →
                            </span>
                        </div>

                    </Link>


                    {/* Admin */}
                    <Link to="/admin" className="role-card">

                        <div className="role-icon admin-icon">
                            ⚙
                        </div>

                        <div>
                            <h3>Admin</h3>

                            <p>
                                Manage doctors, patients,
                                departments and appointments.
                            </p>

                            <span>
                                Admin Portal →
                            </span>
                        </div>

                    </Link>

                </div>

            </section>


            {/* Footer */}
            <footer id="contact">

                <div>
                    <strong>✚ CarePlus</strong>
                    <span> Hospital Management System</span>
                </div>

                <p>
                    © 2026 CarePlus Hospital. All rights reserved.
                </p>

            </footer>

        </div>
    );
}

export default Home;