const mongoose = require("mongoose");

const internshipApplicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    college: {
      type: String,
      required: [true, "College/University is required"],
    },
    major: {
      type: String,
      required: [true, "Major/Department is required"],
    },
    batch: {
      type: String,
      required: [true, "Batch/Year is required"],
    },
    resume: {
      type: String,
      required: [true, "Resume is required"],
    },
    coverLetter: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const InternshipApplication = mongoose.model(
  "InternshipApplication",
  internshipApplicationSchema
);

module.exports = InternshipApplication;
