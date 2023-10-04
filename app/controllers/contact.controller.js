 const ContactService = require("../services/contact.service");
 const MongoDB = require("../utils/mongodb.util");
 const ApiError = require("../api-error");



exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAll = (req, res) => {
    res.send({ message: "findAll handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.update = (rep, res) => {
    res.send({ message: "update handler" });
};

exports.delete = (rep, res) => {
    res.send({ message: "delete handler" });
};

exports.deleteAll = (rep, res) => {
    res.send({ message: "deleteAll handler" });
};

exports.findAllFavorite = (rep, res) => {
    res.send({ message: "findAllFavorite handler" });
};

// Create and Save a new Contact

exports.create = async (rep, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(404, "Name can not be empty"));
    }
    try {
        const ContactService = new ContactService(MongoDB.client);
        const document = await ContactService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
}

// Retrieve all contacts of a users from the database
exports.findAll = async (req, res, next) => {
    let document = [];

    try {
        const ContactService = new ContactService(MongoDB.client);
        const { name} = req.query;
        if (name) {
            document = await ContactService.findByName(name);
        } else {
            document = await ContactService.find({});
        }
    } catch (error) {
        return next(
            new ApiError(500, "An error ocurred while retrieving contacts")
        );
    }
    return res.send(document);
};