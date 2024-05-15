const personService = require("../services/personServices");

exports.getAllPersons = async (req, res) => {
  try {
    const person = await personService.getAllPersons();
    res.json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPersonById = async (req, res) => {
  try {
    const personId = req.params.id;
    const person = await personService.getPersonById(personId);
    if (!person) {
      res.status(404).json({ message: "Person not found" });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getpersonByFirstName = async (req, res) => {
  try {
    const firstName = req.params.firstName;
    const person = await personService.getpersonByFirstName(firstName);
    res.json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAddressByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const address = await personService.getAddressByEmail(email);
    res.json(address);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPerson = async (req, res) => {
  try {
    const personData = req.body;
    const createPerson = await personService.createPerson(personData);
    res.status(201).json(createPerson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePerson = async (req, res) => {
  try {
    const personId = req.params.id;
    const personData = req.body;

    const person = await personService.updatePerson(personId, personData);

    res.status(201).json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deletePerson = async (req, res) => {
  try {
    const personId = req.params.id;

    const person = await personService.deletePerson(personId);
    res.json({ message: "Person Deleted succesfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
