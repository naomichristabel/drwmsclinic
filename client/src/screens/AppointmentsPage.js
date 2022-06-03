import React, { useEffect, useState } from "react";
import AppointmentsTable from "../components/AppointmentsTable";

const AppointmentsPage = () => {

    const [appointmentsData, setAppointmentsData] = useState([]);

    //const changed = localStorage.getItem('changed');

    const getAppointments = async() => {
      fetch('/appointments', {
        method: "GET",
        headers: {'Content-type': 'application/json'},
      })
      .then(response => response.json())
      .then(data => setAppointmentsData(data))
      .catch(error => console.log(error));
    }

      useEffect(() => {
        (async () => {
          console.log('inside useEffect getting appointments')
          await getAppointments();
        })()    
      }, [])

      
      // useEffect(() => {
      //   (async () => {
      //     if (changed === 'yes') {
      //       console.log('changed')
      //       await getAppointments();
      //       localStorage.setItem('changed','no')
      //     }
      //   })()    
      // }, [changed])

    if(appointmentsData && appointmentsData.length > 0) {
        return <AppointmentsTable appointmentsData={appointmentsData}/>
    }

    return null;
      
};

export default AppointmentsPage;
