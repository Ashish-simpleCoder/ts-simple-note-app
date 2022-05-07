import { Router } from 'express'
import { handleLogin, handleLogout, handleRegister } from '../controllers/user.controllers'
import { createOneNote, deleteNotes, deleteOneNote, getNotes, getOneNote, updateNotes, updateOneNote } from '../controllers/user.notes.controllers'
import authUser, { returnLoggedUserDetails } from '../middlewares/authUser'
const router = Router()


// if user wants to login , register and logout so here are the logics
router.route('/api/user').get(returnLoggedUserDetails).post(handleRegister)
router.route('/api/user/login').post(handleLogin)
router.route('/api/user/logout').get(handleLogout)


// auth middleware for authing the genuine user
router.use(authUser)

// routes for note, if user wants to access theme
router.route('/api/user/notes').get(getNotes).patch(updateNotes).delete(deleteNotes)
router.route('/api/user/note').post(createOneNote)        //just for creating one note
router.route('/api/user/notes/:note_id').get(getOneNote).delete(deleteOneNote).patch(updateOneNote)

export default router