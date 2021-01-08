import React,{useEffect} from 'react';
import {fetchAPI,logout} from './Utility';
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
    return(
        <div>
            <div> This is Admin Platform</div>
            <button onClick={()=>logout(props)}>Logout</button>
        </div>
    )
}
export default AdminPlatForm