const courierClient = require("@trycourier/courier");

const sendEmailToPatient = async(req, res, next) => {
        try {
          if (!process.env.COURIER_AUTHORIZATION_TOKEN) {
            throw new Error("You forgot to set COURIER_AUTHORIZATION_TOKEN");
          }
      
        const courier = courierClient.CourierClient(
          { authorizationToken: process.env.COURIER_AUTHORIZATION_TOKEN});
        
        courier.send({
          message: {
            content: {
              title: "Appointment confirmation",
              body: req.body.emailBody
            },
            to: {
              email: req.body.formData.email
            }
          }
        }).then(response => res.send({message: `Email has been queued: (Request ID: ${response.requestId})`}))
          .catch(err => res.status(err.response.status).send({message: err.response.data.type}))
      //res.send({message: 'Email sent...'})
      } catch (error) {
          res.status(500).send({message: 'Something went wrong!'})
          next(error);
        }
}

const sendEmailToDoctor = async(req, res, next) => {
  try {
    if (!process.env.COURIER_AUTHORIZATION_TOKEN) {
      throw new Error("You forgot to set COURIER_AUTHORIZATION_TOKEN");
    }

  const courier = courierClient.CourierClient(
    { authorizationToken: process.env.COURIER_AUTHORIZATION_TOKEN});
  
  courier.send({
    message: {
      content: {
        title: "Appointment confirmation",
        body: req.body.emailBody
      },
      to: {
        email: 'drwmsvirtualclinic@gmail.com'
      }
    }
  }).then(response => res.send({message: `Email has been queued: (Request ID: ${response.requestId})`}))
    .catch(err => res.status(err.response.status).send({message: err.response.data.type}))
//res.send({message: 'Email sent...'})
} catch (error) {
    res.status(500).send({message: 'Something went wrong!'})
    next(error);
  }
}

module.exports = { sendEmailToPatient, sendEmailToDoctor };