import {createSlice} from '@reduxjs/toolkit';

// const token = getToken() ? getToken() : null;

const initialState = {
    loading: false,
    userInfo: {},
    token: null,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    // extraReducers: {},
});

export default authSlice.reducer;
