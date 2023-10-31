const policy = require("../models/policy");

const createPolicy = async(req, res) => {
    // policy data in body
    const newPolicy = new policy(req.body);
    // save to db
    await newPolicy.save();
}

module.exports = { createPolicy };