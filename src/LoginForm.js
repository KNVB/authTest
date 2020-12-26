import React from 'react';
import {fetchAPI} from './Utility';
function LoginForm(props) {
	
	let login=(e)=>{
		
		let theForm=e.target;
		if(theForm.reportValidity()){
			let data={};
			data.loginName=theForm.loginName.value;
			data.adminPwd=theForm.adminPwd.value;
			
			fetchAPI('/login',data,'POST')
			.then(response=>{
				if (response.returnMsg==="OK"){
					props.auth(true);					
				}else{
					alert(response.returnMsg);
				}
			})
			.catch(err => {
				alert("Something wrong when login the system : "+err.message);
			});			

		}
		e.preventDefault();
	}
	return(
        <div className="d-flex align-items-center justify-content-center w-100">
			<form onSubmit={login}>
				<table border="0">
					<thead>
						<tr>
							<td colSpan="2" className="text-center">Login page</td>
						</tr>	
					</thead>	
					<tbody>
						<tr>
							<td>Login Name:</td>
							<td><input type="text" name="loginName" required/></td>						
						</tr>
						<tr>
							<td>Password:</td>
							<td><input type="password" name="adminPwd" required/></td>						
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="2" className="text-center">
								<input type="submit" value="login"/>
							</td>						
						</tr>
					</tfoot>
				</table>
			</form>
		</div>				
	)
}
export default LoginForm;