import React from 'react';
function AdminPlatForm(props){
    fetch('/privateAPI/getClock',{
        method:'POST'
    })
    .then(response=>{
        if (response.ok) {
            console.log("Hi");
        } else {
            throw response;
        }
    })
    .catch(e=>{
        alert("Failed");
        console.log(e.status);
    });
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