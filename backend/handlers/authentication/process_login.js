module.exports = function processLogin(req, res) {
  const work_email = req.body.work_email
  const password = req.body.password

  db.query(
      "SELECT * FROM emp WHERE work_email = ? AND password = ?",
      [work_email, password], 
      (err, result) => {
          if (err) {
              res.send({err: err});
          }

          if (result.length > 0) {
              req.session.user = result
              console.log(req.session.user)
              res.send(result[0]);
          } else {
              res.send({ message: "Wrong username/password combination"})
          }
      }
  )
}