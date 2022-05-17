"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const changeNoteColor_1 = require("../controllers/notes/changeNoteColor");
const user_notes_controllers_1 = require("../controllers/user.notes.controllers");
const authUser_1 = __importStar(require("../middlewares/authUser"));
const router = (0, express_1.Router)();
router.route('/api/user').get(authUser_1.returnLoggedUserDetails).post(user_controllers_1.handleRegister);
router.route('/api/user/login').post(user_controllers_1.handleLogin);
router.route('/api/user/logout').get(user_controllers_1.handleLogout);
router.use(authUser_1.default);
router.route('/api/user/notes').get(user_notes_controllers_1.getNotes).patch(user_notes_controllers_1.updateNotes).delete(user_notes_controllers_1.deleteNotes);
router.route('/api/user/note').post(user_notes_controllers_1.createOneNote);
router.route('/api/user/notes/:note_id').get(user_notes_controllers_1.getOneNote).delete(user_notes_controllers_1.deleteOneNote).patch(user_notes_controllers_1.updateOneNote);
router.route('/api/user/note/color/:note_id').patch(changeNoteColor_1.changeNoteColor);
exports.default = router;
