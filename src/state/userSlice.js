import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            email: null,
            loggedIn: false
        }
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = {
                email: null,
                loggedIn: false
            }
        }
    }
})

export const {login, logout} = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer