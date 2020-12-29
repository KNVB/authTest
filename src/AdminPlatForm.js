import React,{useEffect} from 'react';
import {fetchAPI} from './Utility';
function AdminPlatForm(props){
    useEffect(() => {
        fetchAPI('/privateAPI/getClock','GET',{"year":2020,"month":'Dec'})
        .then(result=>{
            console.log(result);
            let serverDate=new Date(result.year,result.month,result.date);
            console.log("Server date="+serverDate);            
		})
		.catch(err => {
			alert("Something wrong when calling server api: "+err.message);
		});
    },[]);
    function logout(){
        fetchAPI('/privateAPI/logout','POST')
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