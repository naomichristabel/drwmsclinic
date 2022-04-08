const courierClient = require("@trycourier/courier");

const sendEmail = async(req, res, next) => {
        try {
      
          if (!process.env.COURIER_AUTHORIZATION_TOKEN) {
            throw new Error("You forgot to set COURIER_AUTHORIZATION_TOKEN");
          }
      
        const courier = courierClient.CourierClient(
          { authorizationToken: process.env.COURIER_AUTHORIZATION_TOKEN});
        
        // courier.send({
        //   message: {
        //     content: {
        //       title: "Appointment confirmation",
        //       body: req.body.emailBody
        //     },
        //     to: {
        //       email: req.body.formData.email
        //     }
        //   }
        // }).then(response => res.send({message: `Email has been queued: (Request ID: ${response.requestId})`}))
        //   .catch(err => console.error("Send email API call failed, reason ", err));  
      res.send({message: 'Email sent...'})
      } catch (error) {
          next(error);
        }
}

module.exports = {sendEmail};