const express = require('express'); 
const router  = express.Router(); 
const newMeetingController = require('../controllers/new-meeting'); 
const sendEmailController = require('../controllers/send-email'); 

router.get('/zoom', newMeetingController.createNewMeeting); 
router.post('/email', sendEmailController.sendEmail);

module.exports = router; 
