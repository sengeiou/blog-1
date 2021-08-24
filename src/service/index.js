const BaseURL = "http://192.168.0.33"
//const BaseURL = "http://423516z6x1.vicp.fun"

const option = {
    method: "get",
}

export function getServiceData(url) {
    return fetch(BaseURL+url, option)
        .then(res => { return res.json() })
        .then(res => { return res })
        .catch(err => { console.log(err) })
}