//allowedOrigins
const allowedOrigins = ["http://localhost:3000"];

//corsOptions
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credential: true,
  optionsSuccessStatus: 200,
};

//module exports
module.exports = corsOptions;
