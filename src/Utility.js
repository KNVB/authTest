export function fetchAPI(url,method,getParams,postParams){
    if (getParams){
        const paramsObject = new URLSearchParams(getParams);
        const queryString = paramsObject.toString();  
        url+="?"+queryString;
    }
    console.log("=======================");
    console.log("url="+url);
    console.log("method="+method);
    console.log("getParams="+getParams);
    console.log("postParams="+postParams);
    console.log("=======================");
    return fetch(url,
                {
                    body: JSON.stringify(postParams),
                    headers:{
                        'Content-Type': 'application/json' 
                    },
                    "method":method || 'GET',
                })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }else{
                    //console.log(response);
					throw new Error(response.status); 
				}
            })
            
}
export function logout(props){
    fetchAPI('/privateAPI/logout','POST')
    .then(result=>{
        sessionStorage.clear();
        props.auth(null);
    })
    .catch(err=>{
      alert("Something wrong when logout the system: "+err.message);  
    })
}