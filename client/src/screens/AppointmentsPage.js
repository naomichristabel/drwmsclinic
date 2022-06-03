import React, { useEffect, useState } from "react";
import AppointmentsTable from "../components/AppointmentsTable";

const AppointmentsPage = () => {

    const [appointmentsData, setAppointmentsData] = useState([]);

    const getAppointments = async() => {
      fetch('/appointments', {
        method: "GET",
        headers: {'Content-type': 'application/json'},
      })
      .then(response => response.json())
      .then(data => setAppointmentsData(data))
      .catch(error => console.log(error));
    }

      useEffect(async() => {
          await getAppointments();
      }, [])

    if(appointmentsData && appointmentsData.length > 0) {
        return <AppointmentsTable appointmentsData={appointmentsData}/>
    }
      
};

export default AppointmentsPage;
