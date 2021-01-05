import { BrowserRouter as Router,Redirect } from 'react-router-dom';
import AdminPlatForm from './AdminPlatForm';
import React,{useState} from 'react';
import GuardedRoute from './GuardedRoute';
import LoginForm from './LoginForm';
export default function App() {
	const[isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("isAuthenticate"));
	console.log("isAuthenticated="+isAuthenticated);
	if (isAuthenticated===null){
		return <LoginForm auth={setIsAuthenticated}/>
	} else {
		return (
			<Router>
				<GuardedRoute 
					auth={isAuthenticated}
					component={()=><AdminPlatForm auth={setIsAuthenticated}/>}
					path='/adminPlatform'/>
				<Redirect to='/adminPlatform/main'/>
			</Router>
		);		
	}		
}