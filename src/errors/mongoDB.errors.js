const res = require("express/lib/response");

const notFoundError = (res) => {
    return res
        .status(404)
        .send("Este dado não foi encontrado no nosso Banco de dados");
};
const objectIdCastError = (res) => {
    return res
        .status(500)
        .send("Ocorreu um erro ao recuperar este dado em nosso banco de dados ");
};
module.exports = {
    notFoundError,
    objectIdCastError,
};
