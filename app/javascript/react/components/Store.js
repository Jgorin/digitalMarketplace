import { createStore } from "@reduxjs/toolkit"
import RootSlice from "./Reducers/RootSlice"

const Store = createStore(RootSlice)

export default Store