const mongoose = require("mongoose");

// const policySchema = mongoose.Schema(
//     {

//         image: {
//             type: String,
//             required: true
//         },
//         policyName: {
//             type: String,
//             required: true
//         },
//         policyType: {
//             type: String,
//             required: true
//         },
//         policyDescription: {
//             type: String,
//             required: true
//         }
//     }
// )

// const policy = mongoose.model("policy", policySchema);

const orderSchema = mongoose.Schema(
    {
        // take order model reference
        userId: {
            type: String,
            required: true
        },
        // policy:[ policySchema],
        policyStatus: {
            type: String,
            default: "pending",
            // required: true
        }
    }
)

const orders= mongoose.model("orders", orderSchema);
module.exports={orders};