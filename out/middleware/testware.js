"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = test;
exports.dtoCheck = dtoCheck;
const class_validator_1 = require("class-validator");
function test(req, res, next) {
    console.log("middleware called");
    next();
}
function dtoCheck(type) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const errors = yield (0, class_validator_1.validate)(req.body);
        if (Object.keys(errors).length) {
            res.status(400).json({
                status: 400,
                message: errors.map(item => ({
                    [item.property]: Object.values(item.constraints)
                }))
            });
            return;
        }
        next();
    });
}
