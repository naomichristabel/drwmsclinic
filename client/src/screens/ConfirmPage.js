import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import enums from "../enums";

const ConfirmPage = () => {
    const navigate = useNavigate();

    const [joinUrl, setJoinUrl] = useState('');

    const formData = JSON.parse(localStorage.getItem('formData'));

    const getNewZoomMeetingLink = async() => {
        await fetch('/zoom')
        .then(response => response.json())
        .then(data => {
          if(data['join_url'])
            setJoinUrl(data['join_url']);
          else 
            alert(data.message);
        })
      }

    const sendEmail = async(email) => {
    await fetch('/email', {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ formData, email })
    })
    .then(response => response.json())
    .then(data => {
        if(!data.message.includes('Request ID'))
        alert(data.message);
        else if(email.recipient === enums.recipients.PATIENT) 
        bookSlot();
    })
    .catch(error => console.log(error))
    }

    const bookSlot = async() => {
        fetch('/book', {
          method: "POST",
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({ formData })
        })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.log(error));
        
        navigate('/appointments');
        localStorage.removeItem('formData');
      }

    useEffect(async() => {
        await getNewZoomMeetingLink();
    }, []);

    useEffect(() => {
        if(formData && formData.fullName.length !== 0 && joinUrl.length > 0) {
        let email = {
          recipient: `${enums.recipients.PATIENT}`,
          body:
        `Hello ${formData.fullName}, \n 
        Your appointment with Dr.W.M.S.Johnson has been confirmed! \n 
        Please find the details below: \n
        Date: ${formData.appointmentDate}
        Time: ${formData.slot.time}
        Zoom Meeting Joining URL: \n ${joinUrl} \n
        Best wishes,
        Dr WMS Johnson Virtual Clinic team`
        }
        sendEmail(email);
      
        email = {
          recipient: `${enums.recipients.DOCTOR}`,
          body:
        `Hello Dr.W.M.S.Johnson, \n 
        An appointment has been booked! \n
        Patient's details: \n
        Full name:  ${formData.fullName}
        Phone number: ${formData.countryCode} ${formData.phone}
        Email: ${formData.email} \n
        Description: ${formData.description} \n
        Date: ${formData.appointmentDate}
        Time: ${formData.slot.time}
        Zoom Meeting Joining URL: \n ${joinUrl} \n
        Best wishes,
        Dr WMS Johnson Virtual Clinic team`
        }
        sendEmail(email);
        }
        }, [joinUrl])

  return (
    <section className="service_section layout_padding">
      <div className="container py_mobile_45">
        <div className="heading_container heading_center">
          <h2> Appointment Confirmation </h2>
        </div>
      </div>
    </section>
  );
};

export default ConfirmPage;
