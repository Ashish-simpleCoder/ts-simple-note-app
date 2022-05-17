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
const errHandler = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const errors = { email: '', password: '', err: '' };
    const { email, password, status, error, mode } = err;
    if (email) {
        return res.status(status ? status : 200).send({ error: email });
    }
    if (password) {
        return res.status(status ? status : 200).send({ error: password });
    }
    if (error) {
        if (mode === 'note') {
            return res.status(status ? status : 200).send({ error });
        }
        return res.status(status ? status : 200).send({ error });
    }
    const errors_arr = [];
    if (err.code === 11000) {
        const email_err = 'email is already registered';
        errors_arr.push(email_err);
        return res.status(500).send({ errors: errors_arr });
    }
    if ((_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.includes('validation failed')) {
        Object.values(err.errors).forEach((value) => {
            const { path, message } = value === null || value === void 0 ? void 0 : value.properties;
            errors[path] = message;
            errors_arr.push(message);
        });
        return res.status(500).send({ errors: errors_arr });
    }
});
exports.default = errHandler;
