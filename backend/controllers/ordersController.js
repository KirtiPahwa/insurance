const User = require("../models/User.js");
const { orders, policy } = require("../models/orders.js");

// create policy for admin side

const getAllClaims = async (req, res) => {
    try {
        const order = await orders.find(); // Use .populate() to populate the policies with actual policy documents
        res.status(200).json({ order });
    } catch (error) {
        res.status(500).json({ error: "Error fetching orders" });
    }
};

// accept a policy claim
const acceptClaim = (req, res) => {
    // find policy by id using params
    const policyId = req.params.policyId;
    // search policy in db
    const policy = orders.findById(policyId);

    policy.staus = "accepted";

    policy.save((err, updatedPolicy) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to accept policy",
            });
        }
        return res.json(updatedPolicy);
    });
};

// reject a policy claim
const rejectClaim = (req, res) => {
    // find policy by id using params
    const policyId = req.params.policyId;
    // search policy in db
    const policy = orders.findById(policyId);

    policy.staus = "rejected";

    policy.save((err, updatedPolicy) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to reject policy",
            });
        }
        return res.json(updatedPolicy);
    });
};

const createOrder = (req, res) => {
    // we will recieve the order details in the req.body in form of json which will contain an array of orders
    // we will loop through the array and save each order in the db
    const orders = req.body;
    // iterate through the orders array
    orders.forEach((order) => {
        // create a new order object
        const newOrder = new orders(order);
        // save the order in the db
        newOrder.save((err, order) => {
            if (err) {
                return res.status(400).json({
                    error: "Failed to save order in DB",
                });
            }
        });
    });
    return res.json({ message: "Orders saved successfully" });
};

module.exports = { getAllClaims, acceptClaim, rejectClaim, createOrder };
