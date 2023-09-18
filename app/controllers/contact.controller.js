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

