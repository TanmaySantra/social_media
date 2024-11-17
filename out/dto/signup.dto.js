"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignupDto = void 0;
const class_sanitizer_1 = require("class-sanitizer");
const class_validator_1 = require("class-validator");
class UserSignupDto {
}
exports.UserSignupDto = UserSignupDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_sanitizer_1.Trim)()
], UserSignupDto.prototype, "name", void 0);
__decorate([
    (0, class_sanitizer_1.Trim)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)()
], UserSignupDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8, { message: "Passwword should be at least 8 characters long" })
], UserSignupDto.prototype, "password", void 0);
