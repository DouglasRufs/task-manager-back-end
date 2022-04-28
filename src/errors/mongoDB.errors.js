const res = require("express/lib/response");

const notFoundError = (res) => {
    return res
        .status(404)
        .send("Este dado não foi encontrado no nosso Banco de dados");
};

module.exports = {
    notFoundError,
};
