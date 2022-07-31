import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const data = createSlice({
    name: 'jsonData',
    initialState: {},
    reducers: {
        jsonData(state, action) {

        }
    }
})

export let { jsonData } = data.actions



export default configureStore({
    reducer: {
        data : data.reducer

    },
})