// api.js
const apiUrl = 'https://api.example.com'

// API Endpoints
const endpoints = {
    getData: '${apiUrl}/data',
    postData: '${apiUrl}/submit',
};

//API Client
class ApiClient {
    constructor() {
        this.headers = {
            'Content-Type': 'application/json',
        }
    };
}

async = getData(); {
    try {
        const response = await fetch(endpoints.getData, {
            method: 'GET',
            headers: this.headers,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }catch (error) {
        console.error('Error:', error)
        throw error;
    }
}

async = postData(data); {
    try {
        const response = await fetch(endpoints.postData, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// api-client.js
const apiClient = new ApiClient();

// Usage
async function main() {
    try {
        const data = await apiClient.getData();
        console.log(data);

        const postData = { name: 'Kizzy Codes', email: 'davidkizzy504@gmail.com'};
        const response = await apiClient.postData(postData);
        console.log(response);
    }catch (error) {
        console.error('Error', error);
    }
}

main();