const express = require("express");
const { JWT } = require("../utilities/jwt");
const { metricsService } = require("../services/metricsService");

const router = new express.Router();

router.get("/:userId",JWT.authorize, (req, res) => {
  var userId = req.params.userId;
  if (userId) {
    metricsService
      .get(userId)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(500).send("UserId is missing. Kindly provide user Id");
  }
});

router.post("/:userId", JWT.authorize, (req, res) => {
  var userId = req.params.userId;
  if (userId) {
    var bodyData = req.body;
    metricsService
      .set(userId, bodyData)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
});

module.exports = router;
