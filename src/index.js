import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const subdomain = "pythoonicorns";
const appID = "2";
const apiToken = "ULpWeeUtX9pYoFn2FA98Cjm4jvilKDIMOevAaz4t"

const getKintoneData = async() => {
    const requestEndpoint = `https://${subdomain}.kintone.com/k/v1/records.json?app=${appID}`;


const fetchOptions = {
    method: 'GET',
    headers: { 'X-Cybozu-API-Token': apiToken }
};

const response = await fetch(requestEndpoint, fetchOptions);
const jsonResponse = await response.json();
console.log(jsonResponse);
return JSON.stringify(jsonResponse);
}

const RenderResult = () => {
    const [apiResponse, setApiResponse] = useState("***loading***");

    useEffect(()=> {
        getKintoneData().then(
            result => setApiResponse(result));
        
    }, [])
    return (
        <div>
            <h1>My App</h1>
            <p>{apiResponse}</p>
        </div>
    )
}

ReactDOM.render(
    <RenderResult />,
    document.getElementById('root')
);