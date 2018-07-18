import jwt from 'jsonwebtoken';
import { JWT_SECRET, INVALID_PAYLOAD } from './../utils/constants';
import { consoleError } from '../utils/logging';

class UserHandlers {
    constructor() {
        this.self = this;
    }

    validatePayload(payload, cb) {
        const { username, password } = payload;
        if (username && password) {
            return true;
        }
        cb('', { success: false, result: INVALID_PAYLOAD });
        return false;
    }

    loginUser(payload, cb) {
        if (this.validatePayload(payload, cb)) {
            jwt.sign({ data: payload }, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (cb) {
                    if (err) {
                        cb('', { success: false, result: err, statusCode: 400 });
                    } else {
                        cb('', { success: true, result: token, statusCode: 200 });
                    }
                } else {
                    consoleError(err);
                }
            });
        }
    }
}
const userHandlers = new UserHandlers();
module.exports = userHandlers;
