const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const companySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        jobs: [{
            type: Schema.Types.ObjectId,
            ref: 'Job',
        }],
        description: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String
        },
        location: {
            type: {
                type: String,
                enum: ["Point"],
            },
            coordinates: {
                type: [Number],
                index: "2dsphere",
            },
            formattedAddress: String,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true
    }
);

// companySchema.pre("save", async function (next) {
//     const loc = await geocoder.geocode(this.address);
//     this.location = {
//         type: "Point",
//         coordinates: [loc[0].longitude, loc[0].latitude],
//         formattedAddress: loc[0].formattedAddress,
//     };
//     next();
// });

module.exports = model('Company', companySchema);