import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8080/api";

function PatientDashboard() {

    // --------------------------------
    // STATES
    // --------------------------------

    const [doctors, setDoctors] = useState([]);

    const [selectedDoctor, setSelectedDoctor] = useState("");

    const [selectedDate, setSelectedDate] = useState("");

    const [availableSlots, setAvailableSlots] = useState([]);

    const [selectedTime, setSelectedTime] = useState("");

    const [reason, setReason] = useState("");

    const [appointments, setAppointments] = useState([]);

    // For now patient ID is 1
    const patientId = 3;


    // --------------------------------
    // GET DOCTORS
    // --------------------------------

    useEffect(() => {

        axios
            .get(`${API}/doctors`)
            .then(response => {

                console.log("Doctors:", response.data);

                setDoctors(response.data);

            })
            .catch(error => {

                console.error(
                    "Error loading doctors:",
                    error
                );

            });

    }, []);


    // --------------------------------
    // GET AVAILABLE TIME SLOTS
    // --------------------------------

    const getAvailableSlots = async () => {

        if (!selectedDoctor || !selectedDate) {

            alert("Please select doctor and date");

            return;
        }

        try {

            const response = await axios.get(
                `${API}/appointments/available`,
                {
                    params: {
                        doctorId: Number(selectedDoctor),
                        date: selectedDate
                    }
                }
            );

            console.log(
                "Doctor ID:",
                selectedDoctor
            );

            console.log(
                "Selected Date:",
                selectedDate
            );

            console.log(
                "Available Slots:",
                response.data
            );

            setAvailableSlots(response.data);

            // Reset previously selected time
            setSelectedTime("");

            if (response.data.length === 0) {

                alert(
                    "No available times for this doctor on this date"
                );

            }

        } catch (error) {

            console.error(
                "Error loading available slots:",
                error
            );

            alert(
                error.response?.data?.message ||
                "Unable to load available times"
            );

        }
    };


    // --------------------------------
    // BOOK APPOINTMENT
    // --------------------------------

    const bookAppointment = async (e) => {

        e.preventDefault();


        if (!selectedDoctor) {

            alert("Please select a doctor");

            return;
        }


        if (!selectedDate) {

            alert("Please select a date");

            return;
        }


        if (!selectedTime) {

            alert("Please select a time");

            return;
        }


        const appointmentDate =
            `${selectedDate}T${selectedTime}`;


        try {

            await axios.post(
                `${API}/appointments`,
                {
                    appointmentDate: appointmentDate,
                    reason: reason,
                    patientId: patientId,
                    doctorId: Number(selectedDoctor)
                }
            );


            alert(
                "Appointment booked successfully!"
            );


            // Clear form

            setSelectedDoctor("");

            setSelectedDate("");

            setSelectedTime("");

            setReason("");

            setAvailableSlots([]);


            // Refresh appointments

            getMyAppointments();


        } catch (error) {

            console.error(
                "Booking error:",
                error
            );

            alert(
                error.response?.data?.message ||
                "Unable to book appointment"
            );

        }
    };


    // --------------------------------
    // GET PATIENT APPOINTMENTS
    // --------------------------------

    const getMyAppointments = async () => {

        try {

            const response = await axios.get(
                `${API}/appointments/patient/${patientId}`
            );


            console.log(
                "My Appointments:",
                response.data
            );


            setAppointments(response.data);


        } catch (error) {

            console.error(
                "Error loading appointments:",
                error
            );

        }
    };


    // --------------------------------
    // LOAD APPOINTMENTS WHEN PAGE LOADS
    // --------------------------------

    useEffect(() => {

        getMyAppointments();

    }, []);


    // --------------------------------
    // UI
    // --------------------------------

    return (

        <div className="dashboard">

            <h1>Patient Dashboard</h1>

            <p>
                Welcome Patient
            </p>


            {/* ========================= */}
            {/* AVAILABLE DOCTORS */}
            {/* ========================= */}

            <section>

                <h2>
                    Available Doctors
                </h2>


                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>
                                Doctor
                            </th>

                            <th>
                                Specialization
                            </th>

                            <th>
                                Qualification
                            </th>

                            <th>
                                Experience
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {doctors.map(doctor => (

                            <tr key={doctor.id}>

                                <td>
                                    {doctor.id}
                                </td>

                                <td>
                                    {doctor.name}
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

                            </tr>

                        ))}

                    </tbody>

                </table>

            </section>


            {/* ========================= */}
            {/* BOOK APPOINTMENT */}
            {/* ========================= */}

            <section>

                <h2>
                    Book Appointment
                </h2>


                <form onSubmit={bookAppointment}>


                    {/* DOCTOR */}

                    <label>
                        Select Doctor
                    </label>


                    <select
                        value={selectedDoctor}
                        onChange={(e) => {

                            setSelectedDoctor(
                                e.target.value
                            );

                            // Clear old slots
                            setAvailableSlots([]);

                            setSelectedTime("");

                        }}
                    >

                        <option value="">
                            -- Select Doctor --
                        </option>


                        {doctors.map(doctor => (

                            <option
                                key={doctor.id}
                                value={doctor.id}
                            >

                                {doctor.name}
                                {" - "}
                                {doctor.specialization}

                            </option>

                        ))}

                    </select>


                    {/* DATE */}

                    <label>
                        Select Date
                    </label>


                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => {

                            setSelectedDate(
                                e.target.value
                            );

                            // Clear old slots
                            setAvailableSlots([]);

                            setSelectedTime("");

                        }}
                    />


                    {/* CHECK AVAILABLE TIMES */}

                    <button
                        type="button"
                        onClick={getAvailableSlots}
                    >

                        Check Available Times

                    </button>


                    {/* ========================= */}
                    {/* TIME SLOTS */}
                    {/* ========================= */}

                    {availableSlots.length > 0 && (

                        <div className="time-slots">

                            <h3>
                                Available Times
                            </h3>


                            <div>

                                {availableSlots.map(
                                    (slot, index) => (

                                        <button
                                            type="button"
                                            key={index}
                                            className={
                                                selectedTime === slot
                                                    ? "selected-time"
                                                    : ""
                                            }
                                            onClick={() =>
                                                setSelectedTime(
                                                    slot
                                                )
                                            }
                                        >

                                            {slot.substring(0, 5)}

                                        </button>

                                    )
                                )}

                            </div>


                            {/* SELECTED TIME */}

                            {selectedTime && (

                                <p>

                                    Selected Time:

                                    {" "}

                                    <strong>
                                        {selectedTime.substring(0, 5)}
                                    </strong>

                                </p>

                            )}

                        </div>

                    )}


                    {/* REASON */}

                    <label>
                        Reason
                    </label>


                    <textarea
                        placeholder="Enter reason for appointment"
                        value={reason}
                        onChange={(e) =>
                            setReason(e.target.value)
                        }
                    />


                    {/* BOOK */}

                    <button type="submit">

                        Book Appointment

                    </button>


                </form>

            </section>


            {/* ========================= */}
            {/* MY APPOINTMENTS */}
            {/* ========================= */}

            <section>

                <h2>
                    My Appointments
                </h2>


                <table>

                    <thead>

                        <tr>

                            <th>
                                Doctor
                            </th>

                            <th>
                                Specialization
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
                                    key={appointment.id}
                                >

                                    <td>

                                        {
                                            appointment.doctor?.name
                                        }

                                    </td>


                                    <td>

                                        {
                                            appointment.doctor
                                                ?.specialization
                                        }

                                    </td>


                                    <td>

                                        {
                                            new Date(
                                                appointment.appointmentDate
                                            ).toLocaleDateString()
                                        }

                                    </td>


                                    <td>

                                        {
                                            new Date(
                                                appointment.appointmentDate
                                            ).toLocaleTimeString(
                                                [],
                                                {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                }
                                            )
                                        }

                                    </td>


                                    <td>

                                        {
                                            appointment.reason
                                        }

                                    </td>


                                    <td>

                                        {
                                            appointment.status
                                        }

                                    </td>

                                </tr>

                            )
                        )}

                    </tbody>

                </table>

            </section>

        </div>

    );
}

export default PatientDashboard;