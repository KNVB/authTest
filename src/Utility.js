export function fetchAPI(url,method,queryString,postData){
    if (queryString)
        url+="?"+queryString;
    return fetch(url,
                {
                    body: JSON.stringify(postData),
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