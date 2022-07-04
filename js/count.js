console.log('hello world');


fetch('https://c5k09u262j.execute-api.us-east-1.amazonaws.com/api', {
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(console.log)