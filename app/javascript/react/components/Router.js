import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { fetchCurrentUser } from "./Fetches/UserFetches"
import UserShow from "./UserShow"
import TopBar from "./TopBar"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser, setCurrentUser } from './Reducers/UserInfoSlice'

export const Router = (props) => {
  const [errors, setErrors] = useState(null)
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  const getCurrentUserWrapper = async() => {
    const response = await fetchCurrentUser()
    if(response.errors === undefined){
      dispatch(setCurrentUser(response))
    }
    else{ setErrors(response) }
  }

  useEffect(() => {
    if(currentUser.id === undefined){
      getCurrentUserWrapper()
    }
  },[])

  return (
    <BrowserRouter>
      <Route path="/" component={TopBar}/>
      <p>{errors}</p>
      <Switch>
        <Route path="/users/:id" component={UserShow}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
