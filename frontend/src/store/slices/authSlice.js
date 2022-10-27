import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticated: false
    },
    reducers: {
        setAuthentication: (state) => {
            state.authenticated = !state.authenticated
        }
    }
})

export const { setAuthentication } = authSlice.actions
export default authSlice.reducer
