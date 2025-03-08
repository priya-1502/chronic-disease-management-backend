const Metrics = require("../models/metricsModel");
const metricsService = {
  get: (userId) => {
    return new Promise((resolve, reject) => {
      Metrics.findOne({ userId: new ObjectId(userId) })
        .populate("userId", { firstName: 1, lastName: 1 })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  set: (userId,bodyData) => {
    return new promise((resolve, reject) => {
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
              resolve(response);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = { metricsService };
