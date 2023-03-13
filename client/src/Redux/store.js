import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slices/UserSlice";
import PostReducer from "./Slices/PostSlice";
const store = configureStore({
  reducer: { userAuth: UserReducer, postRed: PostReducer },
});

export default store;
