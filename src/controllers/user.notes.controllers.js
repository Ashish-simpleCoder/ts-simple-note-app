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
exports.updateOneNote = exports.updateNotes = exports.deleteNotes = exports.deleteOneNote = exports.getOneNote = exports.getNotes = exports.createOneNote = void 0;
const asyncWrapper_1 = __importDefault(require("../asyncWrapper/asyncWrapper"));
const authUser_1 = require("../middlewares/authUser");
const user_schema_1 = __importDefault(require("../schemas/user.schema"));
exports.createOneNote = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const logged_user = (0, authUser_1.returnLoggedUser)(req, res, next);
    const user = yield user_schema_1.default.findById(logged_user._id);
    if (!user)
        return next({ status: 400, error: 'unauthorised user' });
    if (!req.body.title && !req.body.body)
        return next({ error: 'notes can not be blanked', mode: 'note' });
    user.notes.push(req.body);
    const new_note = yield user.save().then((user) => {
        return user.notes[user.notes.length - 1];
    });
    res.status(201).send({ success: true, note: new_note });
}));
exports.getNotes = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = (0, authUser_1.returnLoggedUser)(req, res, next);
    const user = yield user_schema_1.default.findById(payload._id).select('notes').select('_id');
    if (!user)
        return next({ status: 400, error: 'unauthorized user' });
    if (!user.notes)
        return next({ error: 'no notes found' });
    return res.status(200).send({ notes: user.notes.filter(n => !n.delete).reverse() });
}));
exports.getOneNote = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = (0, authUser_1.returnLoggedUser)(req, res, next);
    const user = yield user_schema_1.default.findOne({ _id: payload._id });
    if (!user)
        return next({ status: 400, error: 'unauthorized user' });
    if (!user.notes)
        return next({ error: 'no notes found' });
    const req_note = user.notes.filter(note => {
        const id = req.params.note_id;
        const note_id = JSON.stringify(note._id).slice(1, -1);
        return note_id === id;
    });
    if (!req_note.length)
        return next({ status: 404, error: 'no note found with this id' });
    else
        res.status(200).send({ note: req_note[0] });
}));
exports.deleteOneNote = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = (0, authUser_1.returnLoggedUser)(req, res, next);
    const user = yield user_schema_1.default.findById(payload._id);
    if (!user)
        return next({ status: 400, error: 'unauthorised user' });
    const note_id = req.params.note_id;
    if (req.body.RESTORE) {
        const { matchedCount } = yield user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': note_id }, { $set: { 'notes.$.delete': false } });
        if (matchedCount)
            return res.send({ success: true });
        if (!matchedCount)
            return next({ status: 404, error: 'no note found with this id' });
    }
    if (req.body.BIN) {
        const { matchedCount } = yield user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': note_id }, { $set: { 'notes.$.delete': true } });
        if (matchedCount)
            return res.send({ success: true });
        if (!matchedCount)
            return next({ status: 404, error: 'no note found with this id' });
    }
    const { matchedCount } = yield user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': note_id }, { $pull: { 'notes': { '_id': note_id } } });
    if (matchedCount)
        return res.send({ success: true });
    if (!matchedCount)
        return next({ status: 404, error: 'no note found with this id' });
}));
exports.deleteNotes = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = (0, authUser_1.returnLoggedUser)(req, res, next);
    const user = yield user_schema_1.default.findById(payload._id);
    if (!user)
        return next({ status: 400, error: 'unauthorised user' });
    let failed_req = [];
    let successed_req = [];
    const req_notes = req.body.notes;
    for (let i = 0; i < req_notes.length; i++) {
        const { _id } = req_notes[i];
        const { matchedCount } = yield user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': _id }, { $pull: {
                'notes': { '_id': _id }
            } });
        if (!matchedCount)
            failed_req.push({ _id });
        else
            successed_req.push({ _id });
    }
    if (successed_req.length === 0)
        next({ status: 500, error: 'could not delete the note' });
    else
        return res.send({ success: true, successed_req, failed_req });
}));
exports.updateNotes = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = (0, authUser_1.returnLoggedUser)(req, res, next);
    const user = yield user_schema_1.default.findById(payload._id);
    if (!user)
        return next({ status: 400, error: 'unauthorised user' });
    let failed_req = [];
    let successed_req = [];
    const req_notes = req.body.notes;
    for (let i = 0; i < req_notes.length; i++) {
        const { title, content, _id, bg } = req_notes[i];
        const { matchedCount } = yield user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': _id }, { $set: {
                'notes.$.title': title,
                'notes.$.content': content,
                'notes.$.bg': bg && bg
            } });
        if (!matchedCount)
            failed_req.push({ _id });
        else
            successed_req.push({ _id });
    }
    return res.send({
        success: true,
        failed_req,
        successed_req
    });
}));
exports.updateOneNote = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = (0, authUser_1.returnLoggedUser)(req, res, next);
    const user = yield user_schema_1.default.findById(payload._id);
    if (!user)
        return next({ status: 400, error: 'unauthorised user' });
    const _id = req.params.note_id;
    const { title, body, bg } = req.body;
    const { matchedCount } = yield user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': _id }, { $set: {
            'notes.$.title': title && title,
            'notes.$.body': body && body,
            'notes.$.bg': bg && bg
        } });
    if (!matchedCount)
        return next({ status: 404, error: 'note not found' });
    return res.send({ success: true });
}));
