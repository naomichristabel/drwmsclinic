const courierClient = require("@trycourier/courier");

const sendEmail = async(req, res, next) => {
  try {
    const { recipient, body } = req.body.email;
    let email;
  
    if(recipient === 'PATIENT') {
      email = req.body.formData.email;
    } else if(recipient === 'DOCTOR') {
      email = 'drwmsvirtualclinic@gmail.com';
    }

    if (!process.env.COURIER_AUTHORIZATION_TOKEN) {
      throw new Error("You forgot to set COURIER_AUTHORIZATION_TOKEN");
    }

  const courier = courierClient.CourierClient(
    { authorizationToken: process.env.COURIER_AUTHORIZATION_TOKEN});
  
  courier.send({
    message: {
      content: {
        title: "Appointment confirmation",
        body
      },
      to: {
        email
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

module.exports = { sendEmail };