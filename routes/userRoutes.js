    const express = require("express");
    const {
      loginController,
      registerController,
      authController,
      applyDoctorController,
      getAllNotificationController,
      deleteAllNotificationController,
      getAllDocotrsController,
      bookeAppointmnetController,
      bookingAvailabilityController,
      applyForInternship, // Import the applyForInternship controller
      userAppointmentsController,
    } = require("../controllers/userCtrl");
    const authMiddleware = require("../middlewares/authMiddleware");

    //router object
    const router = express.Router();

    //routes
    //LOGIN || POST
    router.post("/login", loginController);

    //REGISTER || POST
    router.post("/register", registerController);

    //Auth || POST
    router.post("/getUserData", authMiddleware, authController);

    // User Appointments || GET
    router.get("/user-appointments", authMiddleware, userAppointmentsController);

    // Request Internship || POST
    router.post("/apply-internship", authMiddleware, applyForInternship);

    //Apply Doctor || POST
    router.post("/apply-doctor", authMiddleware, applyDoctorController);

    //Notification Doctor || POST
    router.post(
      "/get-all-notification",
      authMiddleware,
      getAllNotificationController
    );

    //Delete All Notifications || POST
    router.post(
      "/delete-all-notification",
      authMiddleware,
      deleteAllNotificationController
    );

    //GET ALL DOC
    router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);

    //BOOK APPOINTMENT
    router.post("/book-appointment", authMiddleware, bookeAppointmnetController);

    //Booking Availability
    router.post(
      "/booking-availability",
      authMiddleware,
      bookingAvailabilityController
    );

    //Appointments List
    router.get("/user-appointments", authMiddleware, userAppointmentsController);

    module.exports = router;
