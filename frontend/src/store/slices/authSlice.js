import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticated: false,
        user: null
    },
    reducers: {
        setAuthentication: (state) => {
            state.authenticated = true
        },
        sign_out: (state, action) => {
            state.authenticated = false
            state.user = null
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setAuthentication, sign_out, setUser } = authSlice.actions
export default authSlice.reducer
