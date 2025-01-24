import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        // trim: true
    },
    description: {
        type: String,
        required: true,
        // trim: true
        },
    location: {
        type: String,
        required: true,
        // trim: true
    },
    category: {
        type: String,
        required: true,
        // trim: true
    },
    level: {
        type: String,
        required: true,
        // trim: true
    },
    salary: {
        type: Number,
        required: true,
        // trim: true
    },
    date: {
        type: Number,
        required: true,
        // trim: true
    },
    visible: {
        type: Boolean,
        default: true,
        // trim: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },
});

const job = mongoose.model("Job", jobSchema);
export default job;