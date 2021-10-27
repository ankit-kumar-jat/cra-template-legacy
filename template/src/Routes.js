import React from 'react'
import {Route, Switch } from "react-router-dom"

import Home from "./pages/Home/Home"
import PageNotFound from './pages/PageNotFound/PageNotFound'

function routes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="*" component={PageNotFound} />
		</Switch>
	)
}

export default routes
