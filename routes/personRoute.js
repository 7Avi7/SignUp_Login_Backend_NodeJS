// personRoutes.js

const personController = require("../controllers/personController");
const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

// Apply middleware to protect all routes in this router
// router.use(verifyToken);

router.get("/", personController.getAllPersons);

router.get("/:id", personController.getPersonById);

router.get(
  "/firstName/:firstName",

  personController.getpersonByFirstName
);

router.get("/address/:email", personController.getAddressByEmail);

router.post("/", verifyToken, personController.createPerson);

router.put("/:id", personController.updatePerson);

router.delete("/:id", personController.deletePerson);

module.exports = router;
