
const validateFields     = require('../middlewares/validate-fields');

//Export other middlewares

module.exports = {
    ...validateFields,
}