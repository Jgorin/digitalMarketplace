import { createSlice } from "@reduxjs/toolkit"

const defaultUser = {
  id: null,
  username: "",
  email: ""
}
const initialState = { currentUser: defaultUser }

const UserInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    }
  }
})

export const selectCurrentUser = (state) => { return( state.userInfo ) }

export const { setCurrentUser } = UserInfoSlice.actions
export default UserInfoSlice.reducer