import React, { useEffect, useState } from "react";
import AppointmentsTable from "../components/AppointmentsTable";

const AppointmentsPage = () => {

    const [appointmentsData, setAppointmentsData] = useState([]);

      useEffect(() => {
        const getAppointments = async() => {
          fetch('/appointments', {
            method: "GET",
            headers: {'Content-type': 'application/json'},
          })
          .then(response => response.json())
          .then(data => setAppointmentsData(data))
          .catch(error => console.log(error));
        }

          getAppointments();
      }, [])

    if(appointmentsData) {
        return <AppointmentsTable appointmentsData={appointmentsData}/>
    }
      
};

export default AppointmentsPage;
