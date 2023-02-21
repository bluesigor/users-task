import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from '../../config/api';

const initialState = {
        data: [],
        loading: false,
        error: null
};
export const getUsers = createAsyncThunk(
        "users/fetchUsers",
        async () => {
                const res = await axios.get(BASE_URL + "/users");
                const data = await res.data;

                return data;
        }
);



const usersSlice = createSlice({
        name: "users",
        initialState,
        reducers: {
                setUsers: (state, action) => {
                        state.data.push(action.payload);
                }
        },
        extraReducers: (builder) => {
                builder.addCase(getUsers.pending, (state) => {
                        state.loading = true;
                });
                builder.addCase(getUsers.fulfilled, (state, action) => {
                        state.loading = false;
                        state.data = action.payload;
                });
                builder.addCase(getUsers.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.error.message;
                });
        }
});


export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;