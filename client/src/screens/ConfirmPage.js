import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import enums from "../enums";

const ConfirmPage = () => {

    const [joinUrl, setJoinUrl] = useState('');
    const [confirm, setConfirm] = useState(true);

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
        
        localStorage.removeItem('formData');
      }

    useEffect(() => {
        (async () => {
          await getNewZoomMeetingLink();
        })()
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
        setConfirm(true);
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
          {confirm && 
            <>
            <h2>{formData && `Hi ${formData.fullName}!`}</h2>

            <h4>Your appointment is confirmed!</h4>

            <h4>{formData && `Date: ${formData.appointmentDate}`}</h4>
            <h4>{formData && `Time: ${formData.slot.time}`}</h4>
            <Link to={joinUrl}>Zoom meeting link</Link>
            <h5>{joinUrl}</h5>
           
            <div className="slider_section">
              <div className="detail-box">
                <Link to='/appointments'>View upcoming appointments</Link>
              </div>
            </div>
           
            </>
            }
        </div>
      </div>
    </section>
  );
};

export default ConfirmPage;
