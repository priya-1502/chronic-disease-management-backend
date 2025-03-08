const express = require("express");
const { registrationService } = require("../services/registrationService");
const Registration = require("../models/registrationModel");
const Metrics = require("../models/metricsModel");
const { JWT } = require("../utilities/jwt");
const mongoose = require("mongoose");
const { ObjectId } = require('mongoose').Types;

const router = new express.Router();

router.get("/:userId", (req, res) => {
  var userId = req.params.userId;
  Metrics.findOne({ userId: new ObjectId(userId) })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.post("/:userId", JWT.authorize, (req, res) => {
  var userId = req.params.userId;
  var bodyData = req.body;
  let promise;
  Metrics.findById({ userId: userId })
    .then((response) => {
      if (response) {
        promise = Metrics.updateOne({ userId: userId }, bodyData);
      } else {
        promise = Metrics.create(bodyData);
      }
      promise
        .then((response) => {
          res.status(200).send(response);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
