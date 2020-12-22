import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminPlatform from './AdminPlatForm';
import React from 'react';
import SecuredRoute from './SecuredRoute';
import LoginForm from './LoginForm';
function App() {
	return (
		<Router>
		  <Switch>
			  <Route exact path='/' component={LoginForm} />
			  <Route exact path='/adminPlatform/*' component={SecuredRoute} />
			  <Route exact path='/adminPlatform/main' component={AdminPlatform} />
		  </Switch>
		</Router>
	  );
}
export default App;