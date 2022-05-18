const express = require('express'); 
const router  = express.Router(); 

const newMeetingController = require('../controllers/new-meeting'); 
const sendEmailController = require('../controllers/send-email'); 
const appointmentController = require('../controllers/appointments');

router.get('/zoom', newMeetingController.createNewMeeting); 
router.get('/appointments', appointmentController.getAppointments); 

router.post('/slots', appointmentController.getSlots);
router.post('/book', appointmentController.bookAppointment);
router.post('/email', sendEmailController.sendEmail);

module.exports = router; 
