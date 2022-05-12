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
        },
        createNote: (state, action) => {
            state.notes = [action.payload, ...state.notes]
        },
        setNote : (state, action) => {
            state.notes = action.payload
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
export const {setLogin, setLogout, setNote, createNote, updateNote, deleteNote} = userSlice.actions
export default userSlice.reducer

// type UserType = {
//     email?: string,
//     notes?: {}[]
// }