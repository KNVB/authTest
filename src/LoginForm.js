import React from 'react';
function LoginForm(props) {
	let login=(e)=>{
		
		let theForm=e.target;
		if(theForm.reportValidity()){
			let data={};
			data.loginName=theForm.loginName.value;
			data.adminPwd=theForm.adminPwd.value;

			//console.log(data);
			fetch('/login',
				{
					body: JSON.stringify(data),
					headers:{
						'Content-Type': 'application/json' 
					},
					method:'POST',
				}
			)
			.then(response=>{
				if (response.ok) {
					props.history.push('/adminPlatform/main');
				} else {
					throw response;
				}
			})
			.catch(e=>{
				console.log(e.status);
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
							<td colSpan="2" className="text-center">Roster Scheduler Login page</td>
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