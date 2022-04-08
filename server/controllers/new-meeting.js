const rp = require("request-promise");
const jwt = require("jsonwebtoken");

//credentials for creating zoom meeting
const payload = {
    iss: process.env.ZOOM_JWT_API_KEY,
    exp: new Date().getTime() + 5000,
  };
  
const token = jwt.sign(payload, process.env.ZOOM_JWT_API_SECRET);

const createNewMeeting = (req, res, next) => {
    try {
  
      if (!process.env.ZOOM_JWT_API_KEY) {
        throw new Error("You forgot to set ZOOM_JWT_API_KEY");
      } else if (!process.env.ZOOM_JWT_API_SECRET) {
        throw new Error("You forgot to set ZOOM_JWT_API_SECRET");
      }
  
    var options = {
      method: "POST",
      uri: "https://api.zoom.us/v2/users/drwmsclinic@gmail.com/meetings",
      body: {
        topic: "Consultation with Dr.W.M.S.Johnson",
        type: 1,
        settings: {
          host_video: "true",
          participant_video: "true",
        },
      },
      auth: {
        bearer: token,
      },
      headers: {
        "User-Agent": "Zoom-api-Jwt-Request",
        "content-type": "application/json",
      },
      json: true,
    };
  
    // rp(options)
    //   .then((response) => {
    //     res.send(JSON.stringify(response));
    //   })
    //   .catch((err) => {
    //     console.error("Zoom new meeting API call failed, reason ", err);
    //   });
    res.send(JSON.stringify({join_url: 'https://us05web.zoom.us/j/86960258591?pwd=eXA0K1VuVGxFRWtUdXZ4SXpHTU1LUT09'}))
    } catch (error) {
      next(error);
    }
  };

module.exports = {createNewMeeting};
