import React from "react";

const AppointmentsTable = (props) => {
  const { appointmentsData } = props;
  console.log(appointmentsData);
  return (
    <section className="service_section layout_padding">
    <div className="container py_mobile_45">
      <div className="heading_container heading_center">
        <h2>Appointments List</h2>
      </div>
      <div className="table_container table_center">
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>SLOT</th>
            <th>PATIENT NAME</th>
          </tr>
        </thead>
        <tbody>
          {appointmentsData.map((appointment) => (
            <tr>
                <td key={`${Math.random()}+${appointment.appointmentDate}`}>{appointment.appointmentDate}</td>
                <td key={`${Math.random()}+${appointment.slot.time}`}>{appointment.slot.time}</td>
                <td key={`${Math.random()}+${appointment.fullName}`}>{appointment.fullName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  </section>
  );
};

export default AppointmentsTable;
