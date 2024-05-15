const Person = require("../models/personModel");

exports.getAllPersons = async () => {
  try {
    const person = await Person.find();
    return person;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.getPersonById = async (personId) => {
  try {
    const person = Person.findById(personId);
    return person;
  } catch (err) {
    throw new Error(`Not Found By Id ${err.message}`);
  }
};

exports.getpersonByFirstName = async (firstName) => {
  try {
    const person = await Person.find({ firstName: firstName });
    return person;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.getAddressByEmail = async (email) => {
  try {
    const person = await Person.findOne({ email: email });
    if (!person) {
      throw new Error("Person not found");
    }
    return person.address;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.createPerson = async (personData) => {
  try {
    const person = await Person.create(personData);
    return person;
  } catch (err) {
    throw new Error(err.message);
  }
};

exports.updatePerson = async (personId, personData) => {
  try {
    const person = await Person.findByIdAndUpdate(personId, personData, {
      new: true,
    });
    if (!person) {
      throw new Error("Person not found");
    }
    return person;
  } catch (err) {
    throw new Error(`Unable to update Person: ${err.message}`);
  }
};

exports.deletePerson = async (personId) => {
  try {
    const person = await Person.findByIdAndDelete(personId);
    if (!person) {
      throw new Error(`Cound not found Person`);
    }
    return person;
  } catch (err) {
    throw new Error(`Unable to delete Person ${err.message}`);
  }
};
