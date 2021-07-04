import { DELETE, GET } from "./Fetch.js"

export const fetchCurrentUser = () => {
  return GET("/api/v1/users/current")
}

export const destroyUserSession = () => {
  return DELETE("/users/sign_out")
}