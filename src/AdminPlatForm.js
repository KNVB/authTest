import React from 'react';
function AdminPlatForm(props){
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