import React,{useEffect} from 'react';
function AdminPlatForm(props){
    useEffect(() => {
        fetch('/privateAPI/getClock',{
            method:'GET'
        })
        .then(response=>{
            if (response.ok) {
                return response.json();
            } else {
                throw response;
            }
        })
        .then(result=>{
            let serverDate=new Date(result);
            console.log(serverDate);
        })
        .catch(e=>{
            alert("Failed");
            console.log(e.status);
        });
    },[]);
    function logout(){
        props.auth(false);
    }
    return(
        <div>
            <div> This is Admin Platform</div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default AdminPlatForm