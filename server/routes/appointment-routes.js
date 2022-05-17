const express = require('express'); 
const router  = express.Router(); 

const newMeetingController = require('../controllers/new-meeting'); 
const sendEmailController = require('../controllers/send-email'); 
const appointmentController = require('../controllers/appointments');

router.post('/slots', appointmentController.getSlots);
router.post('/book', appointmentController.bookAppointment);
router.get('/zoom', newMeetingController.createNewMeeting); 
router.post('/email/patient', sendEmailController.sendEmailToPatient);
router.post('/email/doctor', sendEmailController.sendEmailToDoctor);

module.exports = router; 
