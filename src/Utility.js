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
                return response.json()
            })
            .catch(error=>{
                throw error;
            })
}