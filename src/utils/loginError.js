"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genLoginError = (type, login) => {
    const invalid = 'invalid credentails';
    const status = 400;
    const { MODE } = process.env;
    if (login) {
        if (type === 'both')
            return { email: 'email is required', password: 'password is required', status };
        if (type === 'email')
            return { email: 'email is required', status };
        if (type === 'password')
            return { password: 'password is required', status };
    }
    if (MODE === 'dev') {
        if (type === 'email')
            return { email: 'email is invalid', status };
        if (type === 'password')
            return { password: 'password is invalid', status };
    }
    else {
        return { error: invalid, status };
    }
};
exports.default = genLoginError;
