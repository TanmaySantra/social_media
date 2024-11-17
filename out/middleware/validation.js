"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dtoValidationMiddleware = dtoValidationMiddleware;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const class_sanitizer_1 = require("class-sanitizer");
function dtoValidationMiddleware(type, skipMissingProperties = false) {
    return (req, res, next) => {
        const dtoObj = (0, class_transformer_1.plainToInstance)(type, req.body);
        (0, class_validator_1.validate)(dtoObj, { skipMissingProperties }).then((errors) => {
            if (errors.length > 0) {
                const dtoErrors = errors.map((error) => Object.values(error.constraints)).join(", ");
                next(new Error(dtoErrors));
            }
            else {
                //sanitize the object and call the next middleware
                (0, class_sanitizer_1.sanitize)(dtoObj);
                req.body = dtoObj;
                next();
            }
        });
    };
}
