import React,{useEffect} from 'react';
import {fetchAPI} from './Utility';
function AdminPlatForm(props){
    useEffect(() => {
        fetchAPI('/privateAPI/getClock','POST',null,{})
        .then(result=>{
            let serverDate=new Date(result);
            console.log("Server date="+serverDate);
		})
		.catch(err => {
			alert("Something wrong when calling server api: "+err.message);
		});
    },[]);
    function logout(){
        fetchAPI('/privateAPI/logout','POST',null,{})
        .then(result=>{
            props.auth(false);
        })
        .catch(err=>{
          alert("Something wrong when logout the system: "+err.message);  
        })
    }
    return(
        <div>
            <div> This is Admin Platform</div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default AdminPlatForm