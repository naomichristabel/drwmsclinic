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
  const [freeSlots, setFreeSlots] = useState([]);

  const dateToday = new Date();
  const today = new Date(dateToday.getTime() - (dateToday.getTimezoneOffset() * 60000)).toISOString().slice(0,10)
  let currentTime = Date.parse(dateToday);

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
      const startTime = Date.parse(`${formData.appointmentDate}T${freeSlot._24h.slice(0,2)}:${freeSlot._24h.slice(3,5)}`)
      
    if(currentTime < startTime){ 
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
      localStorage.setItem('formData',JSON.stringify(formData));
      navigate('/pay');
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
                  <button type="submit">Proceed to pay</button>
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

