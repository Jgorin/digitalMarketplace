
import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"
import Store from "../react/components/Store"

import Router from '../react/components/Router'
import RedBox from 'redbox-react'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        render(
          <Provider store={Store}>
            <Router/>
          </Provider>,
          reactElement
        )
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render(
        <Provider store={Store}>
          <Router/>
        </Provider>,
        reactElement
      )
    }
  }
})