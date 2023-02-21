
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../config/api';

const initialState = {
        data: null,
        loading: false,
        error: null
};

export const getPostsByUserId = createAsyncThunk(
        "posts/fetchPostsByUserId",
        async () => {
                const res = await axios.get(BASE_URL + `/posts`);
                const data = await res.data;

                return data;

        }
);

const postsSlice = createSlice({
        name: "posts",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
                builder.addCase(getPostsByUserId.pending, (state) => {
                        state.loading = true;
                });
                builder.addCase(getPostsByUserId.fulfilled, (state, action) => {
                        state.loading = false;
                        state.data = action.payload;
                });
                builder.addCase(getPostsByUserId.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.error.message;
                });
        }
});



export default postsSlice.reducer;