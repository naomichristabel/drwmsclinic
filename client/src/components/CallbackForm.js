import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import CountryTelCode from './CountryTelCode';
import enums from "../enums";

const CallbackForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    appointmentDate: "",
    slot: {},
    description: "",
  });
  const [joinUrl, setJoinUrl] = useState('');
  const [freeSlots, setFreeSlots] = useState([]);

  const dateToday = new Date()
  const today = new Date(dateToday.getTime() - (dateToday.getTimezoneOffset() * 60000)).toISOString().slice(0,10)
  let currentTime = dateToday.getHours() * 60 + dateToday.getMinutes(); // Minutes since Midnight

  let url;

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

  useEffect(() => {
  if(formData.fullName.length !== 0) {
  let email = {
    recipient: `${enums.recipients[0].name}`,
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
    recipient: `${enums.recipients[1].name}`,
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

  const sendEmail = async(email) => {
    if(email.recipient === 'patient') 
      url = '/email/patient';
    else if(email.recipient === 'doctor') 
      url = '/email/doctor';

    await fetch(url, {
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({ formData, recipient: email.recipient, emailBody: email.body })
    })
    .then(response => response.json())
    .then(data => {
      if(!data.message.includes('Request ID'))
        alert(data.message);
      else if(email.recipient === 'patient') 
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
    
    navigate('/');
  }

  const getFreeSlotsForDate = useCallback(async () => {
    fetch('/slots', {
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({ appointmentDate: formData.appointmentDate })
    })
    .then(response => response.json())
    .then(data => {
    const bookedSlots = data.map(appointment => appointment.slot.id)
    const allFreeSlots = enums.slots.filter(slot => !bookedSlots.includes(slot.id))
    let allFreeSlotsAvailable = [];
 
    allFreeSlots.map(freeSlot => {    
      const startTime = parseInt(freeSlot._24h.slice(0,2)) * 60 + parseInt(freeSlot._24h.slice(3,5)) // minutes
      const closeTime = parseInt(freeSlot._24h.slice(9,12)) * 60 + parseInt(freeSlot._24h.slice(12,14))// minutes    

    if(!((currentTime > startTime && currentTime < closeTime) || (currentTime > startTime))){ 
      allFreeSlotsAvailable.push(freeSlot)
    } 
    })
    
    if(allFreeSlotsAvailable.length > 0)
      setFreeSlots(allFreeSlotsAvailable)
    })
    .catch(error => console.log(error));
  }
  , [formData.appointmentDate])

  //Once a date has been picked, show only free slots for that date in the dropdown
  useEffect(() => {
    if(formData.appointmentDate.length > 0)
      getFreeSlotsForDate();
  }, [formData.appointmentDate, getFreeSlotsForDate]);

  const changeHandler = (e) => {
    if(e.target.name === 'slot') {
      setFormData({ ...formData, 
                    [e.target.name]: {
                                      id: e.target.value, 
                                      time: enums.slots.find(slot => slot.id === e.target.value).value,
                                      _24h: enums.slots.find(slot => slot.id === e.target.value)._24h 
                                    }
                  })
    } else {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }
  const submitHandler = async(e) => {
    e.preventDefault();
    
    //Validate Indian phone number
    const regexExpPhone = /^[6-9]\d{9}$/gi;
    if(formData.countryCode === "+91" && !regexExpPhone.test(formData.phone)) {
      alert('Enter valid phone number!');
    } else {
      await getNewZoomMeetingLink();
    }   
  };

  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Book an appointment</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <form onSubmit={submitHandler}>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div>
                  <CountryTelCode telEvent={changeHandler}/>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div>
                  <input
                    type="date"
                    min={today}
                    name="appointmentDate"
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div>
                  <select
                    id="slots"
                    name="slot"
                    onChange={changeHandler}
                    required
                  >
                    <option value="">Preferred slot</option>
                    {freeSlots.map((option) => (
                      <option value={option.id} key={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="description"
                    className="message_box"
                    placeholder="What do you need consultation for?"
                    onChange={changeHandler}
                  />
                </div>
                <div className="d-flex ">
                  <button type="submit">BOOK</button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="col-md-6">
            <div className="map_container">
              <div className="map">
                <div id="googleMap"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CallbackForm;

