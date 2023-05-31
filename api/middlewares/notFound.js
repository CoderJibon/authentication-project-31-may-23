//404 Not Found
const notFound = (req, res, next) => {
  res
    .status(404)
    .json({ message: "Sorry, the requested resource was not found." });
};

// module export
module.exports = notFound;
