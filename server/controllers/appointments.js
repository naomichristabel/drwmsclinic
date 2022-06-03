const connection = require('../db/connection');

const getAppointments = async(req, res, next) => {
  try {  
    const db = connection.getDb();
   
    const dateToday = new Date();
    const today = new Date(dateToday.getTime() - (dateToday.getTimezoneOffset() * 60000)).toISOString().slice(0,10)
 
    db
  .collection("appointments")
  .find({ appointmentDate: { $gte : today } })
  .sort({ appointmentDate: 1, slot: 1  })
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching slots!");
   } else {
      res.json(result);
    }
  });
  } catch (error) {
    next(error);
  }
}

const getSlots = async(req, res, next) => {
  try {  
    const db = connection.getDb();

    db
  .collection("appointments")
  .find({ appointmentDate: req.body.appointmentDate })
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching slots!");
   } else {
      res.json(result);
    }
  });
  } catch (error) {
    next(error);
  }
}

const bookAppointment = async(req, res, next) => {
  try {
    const db = connection.getDb();
    const { fullName, email, countryCode, phone, appointmentDate, slot, description } = req.body.formData;
    db
    .collection('appointments')
    .insertOne({
      fullName,
      email,
      countryCode,
      phone,
      appointmentDate,
      slot,
      description,
  })
  .then(() => res.send({message: 'Appointment booked! Please check your email!'}))
  } catch (error) {
    res.status(500).send({message: 'Something went wrong! Please try again!'})
    next(error);
  }
}

module.exports = { getAppointments, getSlots, bookAppointment };