
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;


export const fetchSinToken = (endPoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endPoint} `; // localhost:3030/api/

    // console.log(url)

    try {

        if (method === 'GET') {
            return fetch(url);
        } else {
            return fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            })
        }
    } catch (error) {
        console.log(error);
    }

}

export const fetchConToken = (endPoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endPoint} `; // localhost:3030/api/

    // console.log(url)

    const token = localStorage.getItem('token');

    if (token && token !== null) {

        try {
            if (method === 'GET') {
                return fetch(url, {
                    method,
                    headers: {
                        'x-token': token,
                    }
                });
            } else {
                return fetch(url, {
                    method,
                    headers: {
                        'content-type': 'application/json',
                        'x-token': token
                    },
                    body: JSON.stringify(data)
                })
            }

        } catch (error) {
            console.log(error);
        }
    } else {
        return console.log('There is not token to send or token is expired!');
    }


}
