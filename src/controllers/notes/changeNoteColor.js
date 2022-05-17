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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeNoteColor = void 0;
const asyncWrapper_1 = __importDefault(require("../../asyncWrapper/asyncWrapper"));
const authUser_1 = require("../../middlewares/authUser");
const user_schema_1 = __importDefault(require("../../schemas/user.schema"));
exports.changeNoteColor = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = (0, authUser_1.returnLoggedUser)(req, res, next);
    const user = yield user_schema_1.default.findById(payload._id);
    if (!user)
        return next({ status: 400, error: 'unauthorised user' });
    const _id = req.params.note_id;
    const { bg } = req.body;
    const { matchedCount } = yield user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': _id }, { $set: {
            'notes.$.bg': bg
        } });
    if (!matchedCount)
        return next({ status: 404, error: 'note not found' });
    return res.send({ success: true });
}));
