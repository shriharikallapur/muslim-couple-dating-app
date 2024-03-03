import { configureStore } from "@reduxjs/toolkit"
// import uploadModalSlice from "./slices/uploadModalSlice"
import authSlice from "./slices/authSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    // uploadModalOpen: uploadModalSlice
  }
})