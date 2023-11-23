module.exports = function HomeHandler(req, res) {

    res.json("Hi hmmm ano kaya dito?")

    res.json("Session starts with " + req.session.user)
  
    res.end();
};