import { combineReducers } from "redux"
import UserInfoSlice from "./UserInfoSlice"

const RootSlice = combineReducers({
  userInfo: UserInfoSlice
})

export default RootSlice