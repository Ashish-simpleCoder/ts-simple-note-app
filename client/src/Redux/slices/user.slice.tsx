import { createSlice } from "@reduxjs/toolkit";

const userSlice  = createSlice({
    name: 'user',
    initialState: {
        email: '',
        _id: '',
        notes: Array()
    },
    reducers: {
        setLogin: (state, action) => {
            state.email = action.payload
        },
        setLogout: (state) => {
            state.email = ''
            state.notes = Array()
        },
        createNote: (state, action) => {
            state.notes = [action.payload, ...state.notes]
        },
        setNote : (state, action) => {
            state.notes = action.payload
        },
        changeNoteColor : (state, action) => {
            state.notes = state.notes.map(note => {
                if(note._id == action.payload._id){
                    const new_note = {...note, bg: action.payload.bg}
                    return new_note
                }
                return note
            })
        },
        updateNote : (state, action)=> {
            state.notes = state.notes.map(note => {
                if(note._id == action.payload._id){
                    return action.payload
                }
                return note
            })
        },
        deleteNote : (state, action)=> {
            state.notes = state.notes.filter(note => {
                return note._id != action.payload
            })
        }
    }
})
export const {setLogin, setLogout, setNote, createNote, updateNote, deleteNote, changeNoteColor} = userSlice.actions
export default userSlice.reducer

// type UserType = {
//     email?: string,
//     notes?: {}[]
// }