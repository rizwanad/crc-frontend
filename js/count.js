fetch('https://dmifuxhuqf.execute-api.us-east-1.amazonaws.com/api', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(({ body }) => {
        document.querySelector('#count').append(body.count);
    });