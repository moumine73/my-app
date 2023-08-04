import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import CountUseEffect from '../components/countUseEffect/CountUseEffect'
import MonComposant from '../components/monComposant/MonComposant'

const Router = () => {

    const routes: RouteObject[] = [
        {
            path: "/",
            element: <CountUseEffect />
        },
        {
            path: "/composant",
            element: <MonComposant />
        }
    ]

  return (
    <div>{useRoutes(routes)}</div>
  )
}

export default Router