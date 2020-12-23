import { BrowserRouter as Router,Redirect } from 'react-router-dom';
import AdminPlatForm from './AdminPlatForm';
import React,{useState} from 'react';
import GuardedRoute from './GuardedRoute';
import LoginForm from './LoginForm';
export default function App() {
	const[isAutheticated, setIsAutheticated] = useState(false);
	if (isAutheticated){
		return (
			<Router>
				<GuardedRoute 
					auth={isAutheticated}
					component={()=><AdminPlatForm auth={setIsAutheticated}/>}
					path='/adminPlatform'/>
				<Redirect to='/adminPlatform/main'/>
			</Router>
		);
	} else {
		return <LoginForm auth={setIsAutheticated}/>
	}		
}