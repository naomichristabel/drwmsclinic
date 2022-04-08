import React, { useEffect, useState } from "react";
import CountryTelCode from './CountryTelCode';

const options = [
  {
    label: "7PM to 8PM",
    value: "7PM to 8PM",
  },
  {
    label: "8PM to 9PM",
    value: "8PM to 9PM",
  },
  {
    label: "9PM to 10PM",
    value: "9PM to 10PM",
  },
];

const CallbackForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
    appointmentDate: "",
    slot: "",
    description: "",
  });
  const [joinUrl, setJoinUrl] = useState('');

  let emailBody, response;

  useEffect(() => {
  emailBody =
  `Hello ${formData.fullName}, \n 
  Your appointment with Dr.W.M.S.Johnson has been confirmed! \n Please find the details below: \n
  Date: ${formData.appointmentDate}
  Time: ${formData.slot}
  Zoom Meeting Joining URL: \n ${joinUrl} \n
  Best wishes,
  Dr WMS Johnson Virtual Clinic team`
  }, [joinUrl])

  const getNewZoomMeetingLink = async() => {
    response = await fetch('/zoom');
    const { join_url } = await response.json();
    setJoinUrl(join_url);
  }

  const sendEmail = async() => {
    response = await fetch('/email', {
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({ formData, emailBody })
    });
    const { message } = await response.json();
    alert('Appointment details sent!');
  }

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const submitHandler = async(e) => {
    e.preventDefault();
    getNewZoomMeetingLink();
    sendEmail();
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
                  >
                    <option value="none" selected disabled>Preferred slot</option>
                    {options.map((option) => (
                      <option value={option.value} key={option.value}>
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
