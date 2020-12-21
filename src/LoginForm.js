import React from 'react';
function LoginForm() {
	return(
        <div className="d-flex align-items-center justify-content-center w-100">
			<form>
				<table border="0">
					<tr>
						<td colspan="2" className="text-center">Roster Scheduler Login page</td>
					</tr>	
					<tr>
						<td>Login Name:</td>
						<td><input type="text" name="loginName"/></td>						
					</tr>
					<tr>
						<td>Password:</td>
						<td><input type="password" name="adminPwd"/></td>						
					</tr>
					<tr>
						<td colspan="2" className="text-center">
                            <input type="submit" value="login"/>
                        </td>						
					</tr>
				</table>
			</form>
		</div>				
	)
}
export default LoginForm;