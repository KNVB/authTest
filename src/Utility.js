export function fetchAPI(url,data,method){
    return fetch(url,
                {
                    body: JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json' 
                    },
                    "method":method,
                })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }else{
					throw new Error(response.status); 
				}
            })
            
}