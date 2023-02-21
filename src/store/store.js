import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./usersSlice/usersSlice";
import postsReducer from "./postsSlice/postsSlice";
import albumsReducer from "./albumsSlice/albumsSlice";

const store = configureStore({
  reducer: {
    albums: albumsReducer,
    users: usersReducer,
    posts: postsReducer,
  },
});

export default store;
