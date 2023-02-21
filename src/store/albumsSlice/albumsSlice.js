
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../config/api';

const initialState = {
        data: null,
        loading: false,
        error: null
};

export const getAlbums = createAsyncThunk(
        "albums/fetchAlbums",
        async () => {
                const res = await axios.get(BASE_URL + `/albums`);
                const data = await res.data;

                return data;

        }
);

const albumsSlice = createSlice({
        name: "albums",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
                builder.addCase(getAlbums.pending, (state) => {
                        state.loading = true;
                });
                builder.addCase(getAlbums.fulfilled, (state, action) => {
                        state.loading = false;
                        state.data = action.payload;
                });
                builder.addCase(getAlbums.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.error.message;
                });
        }
});



export default albumsSlice.reducer;