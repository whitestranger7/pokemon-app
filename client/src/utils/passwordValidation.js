var passwordValidator = require('password-validator');

var schema = new passwordValidator();

export default schema
.is().min(8)
.is().max(100)
.has().uppercase()
.has().lowercase()
.has().digits()
.has().not().spaces()
;