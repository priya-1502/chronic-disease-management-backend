const express = require("express");
const { registrationService } = require("../services/registrationService");
const { JWT } = require("../utilities/jwt");

const router = new express.Router();

router.get("/:id", JWT.authorize, (req, res) => {
  var id = req.params.id;
  if (id) {
    registrationService
      .fetch(id)
      .then((response) => {
        res.status(200).send({ response });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(500).send("Id is required");
  }
});

router.post("/login", (req, res) => {
  registrationService
    .login(req)
    .then((response) => {
      res.status(200).send({ response });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/create", (req, res) => {
  var bodyData = req.body;
  registrationService
    .create(bodyData)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
